export function lineCount (value: string) {
  return value
    .split("")
    .filter(character => character === '\n')
    .length
  ;
}
