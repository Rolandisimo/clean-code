import { deliveryDate } from "./before";
import { Order } from "./utils";

describe("remove-flag-argument", () => {
  describe("1", () => {
    describe("before", () => {
      describe("rush", () => {
        it("should return default case", () => {
          const order: Order = {
            deliveryTime: "",
            placedOn: { plusDays: (value) => value },
          };
          expect(deliveryDate(order, true)).toBe(4);
        });
        it("should return first branch case", () => {
          const order: Order = {
            deliveryTime: "MA",
            placedOn: { plusDays: (value) => value },
          };
          expect(deliveryDate(order, true)).toBe(2);
        });
        it("should return second branch case", () => {
          const order: Order = {
            deliveryTime: "NY",
            placedOn: { plusDays: (value) => value },
          };
          expect(deliveryDate(order, true)).toBe(3);
        });
      })

      describe("regular", () => {
        it("should return default case", () => {
          const order: Order = {
            deliveryTime: "",
            placedOn: { plusDays: (value) => value },
          };
          expect(deliveryDate(order, false)).toBe(6);
        });
        it("should return first branch case", () => {
          const order: Order = {
            deliveryTime: "MA",
            placedOn: { plusDays: (value) => value },
          };
          expect(deliveryDate(order, false)).toBe(4);
        });
        it("should return second branch case", () => {
          const order: Order = {
            deliveryTime: "NH",
            placedOn: { plusDays: (value) => value },
          };
          expect(deliveryDate(order, false)).toBe(5);
        });
      })
    });
  });
})
