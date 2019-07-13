# Long function

This should be pretty self-explanatory. If you catch yourself scrolling up and down, up and down ad infinitum just to understand what is happening in a function there's a good chance it could and should be split into smaller parts. Some refactoring techniques to use here are [Extract function](https://github.com/Rolandisimo/refactoring_examples/tree/master/refactoring/extract-function), Slide Statements, Replace Conditional with Polymorphism, Replace Temp with Query and others.

Code below is an example of a public codebase having this code smell present. You don't have to read it, just to see how uncomfortable it is to look at it.
<br/></br>Excerpt from https://github.com/TypeStrong/ts-node/blob/master/src/index.ts

```typescript
export function register (opts: Options = {}): Register {
  const options = Object.assign({}, DEFAULTS, opts)
  const originalJsHandler = require.extensions['.js'] // tslint:disable-line

  const ignoreDiagnostics = [
    6059, // "'rootDir' is expected to contain all source files."
    18002, // "The 'files' list in config file is empty."
    18003, // "No inputs were found in config file."
    ...(options.ignoreDiagnostics || [])
  ].map(Number)

  const ignore = options.skipIgnore ? [] : (
    options.ignore || ['/node_modules/']
  ).map(str => new RegExp(str))

  // Require the TypeScript compiler and configuration.
  const cwd = process.cwd()
  const typeCheck = options.typeCheck === true || options.transpileOnly !== true
  const compiler = require.resolve(options.compiler || 'typescript', { paths: [cwd, __dirname] })
  const ts: typeof _ts = require(compiler)
  const transformers = options.transformers || undefined
  const readFile = options.readFile || ts.sys.readFile
  const fileExists = options.fileExists || ts.sys.fileExists
  const config = readConfig(cwd, ts, fileExists, readFile, options)
  const configDiagnosticList = filterDiagnostics(config.errors, ignoreDiagnostics)
  const extensions = ['.ts']
  const outputCache = new Map<string, string>()

  const diagnosticHost: _ts.FormatDiagnosticsHost = {
    getNewLine: () => ts.sys.newLine,
    getCurrentDirectory: () => cwd,
    getCanonicalFileName: (path) => path
  }

  // Install source map support and read from memory cache.
  sourceMapSupport.install({
    environment: 'node',
    retrieveFile (path: string) {
      return outputCache.get(path) || ''
    }
  })

  const formatDiagnostics = process.stdout.isTTY || options.pretty
    ? ts.formatDiagnosticsWithColorAndContext
    : ts.formatDiagnostics

  function createTSError (diagnostics: ReadonlyArray<_ts.Diagnostic>) {
    const diagnosticText = formatDiagnostics(diagnostics, diagnosticHost)
    const diagnosticCodes = diagnostics.map(x => x.code)
    return new TSError(diagnosticText, diagnosticCodes)
  }

  function reportTSError (configDiagnosticList: _ts.Diagnostic[]) {
    const error = createTSError(configDiagnosticList)
    if (options.logError) {
      // Print error in red color and continue execution.
      console.error('\x1b[31m%s\x1b[0m', error)
    } else {
      // Throw error and exit the script.
      throw error
    }
  }

  // Render the configuration errors.
  if (configDiagnosticList.length) reportTSError(configDiagnosticList)

  // Enable additional extensions when JSX or `allowJs` is enabled.
  if (config.options.jsx) extensions.push('.tsx')
  if (config.options.allowJs) extensions.push('.js')
  if (config.options.jsx && config.options.allowJs) extensions.push('.jsx')

  /**
   * Get the extension for a transpiled file.
   */
  const getExtension = config.options.jsx === ts.JsxEmit.Preserve ?
    ((path: string) => /\.[tj]sx$/.test(path) ? '.jsx' : '.js') :
    ((_: string) => '.js')

  /**
   * Create the basic required function using transpile mode.
   */
  let getOutput = function (code: string, fileName: string, lineOffset = 0): SourceOutput {
    const result = ts.transpileModule(code, {
      fileName,
      transformers,
      compilerOptions: config.options,
      reportDiagnostics: true
    })

    const diagnosticList = result.diagnostics ?
      filterDiagnostics(result.diagnostics, ignoreDiagnostics) :
      []

    if (diagnosticList.length) reportTSError(configDiagnosticList)

    return [result.outputText, result.sourceMapText as string]
  }

  let getTypeInfo = function (_code: string, _fileName: string, _position: number): TypeInfo {
    throw new TypeError(`Type information is unavailable without "--type-check"`)
  }

  // Use full language services when the fast option is disabled.
  if (typeCheck) {
    const memoryCache = new MemoryCache(config.fileNames)
    const cachedReadFile = cachedLookup(debugFn('readFile', readFile))

    // Create the compiler host for type checking.
    const serviceHost: _ts.LanguageServiceHost = {
      getScriptFileNames: () => Array.from(memoryCache.fileVersions.keys()),
      getScriptVersion: (fileName: string) => {
        const version = memoryCache.fileVersions.get(fileName)
        return version === undefined ? '' : version.toString()
      },
      getScriptSnapshot (fileName: string) {
        let contents = memoryCache.fileContents.get(fileName)

        // Read contents into TypeScript memory cache.
        if (contents === undefined) {
          contents = cachedReadFile(fileName)
          if (contents === undefined) return

          memoryCache.fileVersions.set(fileName, 1)
          memoryCache.fileContents.set(fileName, contents)
        }

        return ts.ScriptSnapshot.fromString(contents)
      },
      readFile: cachedReadFile,
      readDirectory: cachedLookup(debugFn('readDirectory', ts.sys.readDirectory)),
      getDirectories: cachedLookup(debugFn('getDirectories', ts.sys.getDirectories)),
      fileExists: cachedLookup(debugFn('fileExists', fileExists)),
      directoryExists: cachedLookup(debugFn('directoryExists', ts.sys.directoryExists)),
      getNewLine: () => ts.sys.newLine,
      useCaseSensitiveFileNames: () => ts.sys.useCaseSensitiveFileNames,
      getCurrentDirectory: () => cwd,
      getCompilationSettings: () => config.options,
      getDefaultLibFileName: () => ts.getDefaultLibFilePath(config.options),
      getCustomTransformers: () => transformers
    }

    const registry = ts.createDocumentRegistry(ts.sys.useCaseSensitiveFileNames, cwd)
    const service = ts.createLanguageService(serviceHost, registry)

    // Set the file contents into cache manually.
    const updateMemoryCache = function (contents: string, fileName: string) {
      const fileVersion = memoryCache.fileVersions.get(fileName) || 0

      // Avoid incrementing cache when nothing has changed.
      if (memoryCache.fileContents.get(fileName) === contents) return

      memoryCache.fileVersions.set(fileName, fileVersion + 1)
      memoryCache.fileContents.set(fileName, contents)
    }

    getOutput = function (code: string, fileName: string, lineOffset: number = 0) {
      updateMemoryCache(code, fileName)

      const output = service.getEmitOutput(fileName)

      // Get the relevant diagnostics - this is 3x faster than `getPreEmitDiagnostics`.
      const diagnostics = service.getSemanticDiagnostics(fileName)
        .concat(service.getSyntacticDiagnostics(fileName))

      const diagnosticList = filterDiagnostics(diagnostics, ignoreDiagnostics)

      if (diagnosticList.length) reportTSError(diagnosticList)

      if (output.emitSkipped) {
        throw new TypeError(`${relative(cwd, fileName)}: Emit skipped`)
      }

      // Throw an error when requiring `.d.ts` files.
      if (output.outputFiles.length === 0) {
        throw new TypeError(
          'Unable to require `.d.ts` file.\n' +
          'This is usually the result of a faulty configuration or import. ' +
          'Make sure there is a `.js`, `.json` or another executable extension and ' +
          'loader (attached before `ts-node`) available alongside ' +
          `\`${basename(fileName)}\`.`
        )
      }

      return [output.outputFiles[1].text, output.outputFiles[0].text]
    }

    getTypeInfo = function (code: string, fileName: string, position: number) {
      updateMemoryCache(code, fileName)

      const info = service.getQuickInfoAtPosition(fileName, position)
      const name = ts.displayPartsToString(info ? info.displayParts : [])
      const comment = ts.displayPartsToString(info ? info.documentation : [])

      return { name, comment }
    }
  }

  // Create a simple TypeScript compiler proxy.
  function compile (code: string, fileName: string, lineOffset?: number) {
    const [value, sourceMap] = getOutput(code, fileName, lineOffset)
    const output = updateOutput(value, fileName, sourceMap, getExtension)
    outputCache.set(fileName, output)
    return output
  }

  const register: Register = { cwd, compile, getTypeInfo, extensions, ts }

  // Register the extensions.
  registerExtensions(opts, extensions, ignore, register, originalJsHandler)

  return register
}
```
