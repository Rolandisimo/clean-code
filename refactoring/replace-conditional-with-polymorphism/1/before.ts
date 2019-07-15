type PossibleDataType = "number" | "Date" | "string" | "boolean";

export function getImportantData(type: PossibleDataType, data: string) {
  let result;

  if (type === "Date" ||  type === "string") {
    result = data;
  } else if (type === "boolean") {
    result = !!data;
  } else if (type === "number") {
    result = +data;
  }

  return result;
}
