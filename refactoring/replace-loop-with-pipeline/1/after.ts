export function lineCount (value: string) {
  return value.split("").filter(c => c === "\n").length
}
