import { Order, Priority } from "./after";

describe("replace-primitive-with-object", () => {
  describe("1", () => {
    describe("Order class", () => {
      it("should create an Order class with value", () => {
        const order = new Order({ priority: new Priority("medium") });
        expect(order.priority.equals(new Priority("medium"))).toBeTruthy();
      });
      it("should be able to set priority after constructor", () => {
        const order = new Order({ priority: new Priority("medium") });
        order.priority = new Priority("rush")
        expect(order.priority.equals(new Priority("rush"))).toBeTruthy();
      });
      it("should check for equal priorities", () => {
        const order = new Order({ priority: new Priority("rush") });
        expect(order.priority.equals(new Priority("rush"))).toBeTruthy();
      });
      it("should check for higher priorities", () => {
        const order = new Order({ priority: new Priority("rush") });
        expect(order.priority.higherThan(new Priority("medium"))).toBeTruthy();
      });
      it("should check for lower priorities", () => {
        const order = new Order({ priority: new Priority("low") });
        expect(order.priority.lowerThan(new Priority("medium"))).toBeTruthy();
      });
    })
  });
})
