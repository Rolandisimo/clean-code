import { alertForMiscreant } from "./before";

describe("separate-query-from-modifier", () => {
  describe("1", () => {
    describe("alertForMiscreant", () => {
      it("should return matched people", () => {
        const miscreant = alertForMiscreant(["Don", "John", "Bob"]);
        expect(miscreant).toBe("Don");
      });
      it("should return matched people again", () => {
        const miscreant = alertForMiscreant(["John", "Bob"]);
        expect(miscreant).toBe("John");
      });
      it("should not return match", () => {
        const miscreant = alertForMiscreant(["Bob"]);
        expect(miscreant).toBe("");
      });
    })
  });
})
