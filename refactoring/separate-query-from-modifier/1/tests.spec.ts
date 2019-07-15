const setOffAlarmsMock = jest.fn();
jest.mock("./utils", () => ({
  setOffAlarms: setOffAlarmsMock,
}));

import { setOffAlarms } from "./utils";
import { findMiscreant, alertForMiscreant } from "./after";

describe("separate-query-from-modifier", () => {
  describe("1", () => {
    describe("alertForMiscreant", () => {
      beforeEach(() => {
        jest.resetAllMocks();
      });

      it("should call setOffAlarms if matched", () => {
        alertForMiscreant(["Don", "John", "Bob"]);
        expect(setOffAlarms).toHaveBeenCalledTimes(1);
      });
      it("should not call setOffAlarms without a match", () => {
        alertForMiscreant(["Bob"]);
        expect(setOffAlarms).toHaveBeenCalledTimes(0);
      });
    })
    describe("findMiscreant", () => {
      it("should return matched people", () => {
        const miscreant = findMiscreant(["Don", "John", "Bob"]);
        expect(miscreant).toBe("Don");
      });
      it("should return matched people again", () => {
        const miscreant = findMiscreant(["John", "Bob"]);
        expect(miscreant).toBe("John");
      });
      it("should not return match", () => {
        const miscreant = findMiscreant(["Bob"]);
        expect(miscreant).toBe("");
      });
    })
  });
})
