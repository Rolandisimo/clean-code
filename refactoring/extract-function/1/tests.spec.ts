import { getProductEntries } from "./after";

describe("extract-function", () => {
  describe("1", () => {
    describe("getProductEntries", () => {
      it("should return default case", () => {
        expect(getProductEntries([], [], [])).toEqual([]);
      });
      it("should return the matching products", () => {
        expect(getProductEntries(
          [{ coreItemCode: "2", productCode: "2" }, { coreItemCode: "3", productCode: "3" }],
          [{ coreItemCode: "1", productCode: "1" }, { coreItemCode: "2", productCode: "2" }, { coreItemCode: "3", productCode: "3" }],
          [{ description: "description", images: [], productCodes: ["1", "2", "3"], publicUrl: "google.com", title: "title" }],
        )).toEqual([
          { description: "description", images: null, coreItemCode: "2", publicUrl: "google.com", title: "title" },
          { description: "description", images: null, coreItemCode: "3", publicUrl: "google.com", title: "title" },
        ]);
      });
    })
  });
})
