import { getImportantData } from "./before";

describe("replace-conditional-with-polymorphism", () => {
  describe("1", () => {
    describe("getImportantData", () => {
      it("should return number", () => {
        expect(getImportantData("number", "123")).toBe(123);
      });
      it("should return string", () => {
        expect(getImportantData("string", "123")).toBe("123");
      });
      it("should return boolean", () => {
        expect(getImportantData("boolean", "123")).toBe(true);
      });
    });
  });
})
