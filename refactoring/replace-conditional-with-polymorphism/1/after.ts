
class Parser { parse(data: string) { throw new Error("Subclass must implement method") } }
class NumberParser extends Parser { parse(data: string) { return data; } }
class StringParser extends Parser { parse(data: string) { return +data; } }
class BooleanParser extends Parser { parse(data: string) { return !!data; } }

type PossibleDataType = "number" | "Date" | "string" | "boolean";

type Values =
  | typeof NumberParser
  | typeof StringParser
  | typeof BooleanParser
;

export const PARSER_CONFIG_MAP: Record<PossibleDataType, Values> = {
  number: NumberParser,
  Date: StringParser,
  string: StringParser,
  boolean: BooleanParser,
} as const;

const createParserFor = (type: PossibleDataType) => {
  try {
    return new PARSER_CONFIG_MAP[type]();
  } catch (error) {
    throw error;
  }
};

export function getImportantData(type: PossibleDataType, data: string) {
  const parser = createParserFor(type).parse(data);

  return parser;
}
