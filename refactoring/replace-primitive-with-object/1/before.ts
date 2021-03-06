export type Priority = "low" | "medium" | "high" | "rush";

export interface OrderProps {
  priority: Priority;
}

export class Order {
  public priority: Priority;
  constructor(data: OrderProps) {
    this.priority = data.priority;
    // some logic...
  }
  // some logic...
}



// Usage example
const orders: Order[] = [];
const highPriorityCount = orders.filter((order) => {
  return (
    "high" === order.priority
    || "rush" === order.priority
  );
}).length;
