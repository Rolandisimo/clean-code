import { Order } from "./before";

describe("replace-primitive-with-object", () => {
  describe("1", () => {
    describe("Order class", () => {
      it("should create an Order class with value", () => {
        const order = new Order({ priority: "medium" });
        expect(order.priority).toBe("medium");
      });
      it("should be able to set priority after constructor", () => {
        const order = new Order({ priority: "medium" });
        order.priority = "rush"
        expect(order.priority).toBe("rush");
      });
    })
  });
})
