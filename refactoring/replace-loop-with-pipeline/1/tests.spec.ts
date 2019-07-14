import { lineCount } from "./after";

describe("replace-loop-with-pipeline", () => {
  describe("1", () => {
    describe("lineCount", () => {
      it("should work with special characters ", () => {
        expect(lineCount("a\nb\nc\n")).toBe(3);
      });
      it("should work without specials characters ", () => {
        expect(lineCount("abc")).toBe(0);
      });
    })
  });
})
