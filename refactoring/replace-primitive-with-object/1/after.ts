export type PriorityLevel = "low" | "medium" | "high" | "rush";

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

export class Priority {
  private value: PriorityLevel | undefined;

  constructor(value: PriorityLevel | Priority) {
    if (value instanceof Priority) { return value };
    if (Priority.legalValues().includes(value)) {
      this.value = value;
    } else {
      throw new Error(`${value} is invalid for Priority`);
    }
  }
  public toString() { return this.value };
  get _index() { return Priority.legalValues().indexOf(this.value!) }
  private static legalValues(): PriorityLevel[] { return ["low", "medium", "high", "rush"] }

  public equals(otherPriority: Priority) { return this._index === otherPriority._index }
  public higherThan(otherPriority: Priority) { return this._index > otherPriority._index }
  public lowerThan(otherPriority: Priority) { return this._index < otherPriority._index }
}



const orders: Order[] = [];
const highPriorityCount = orders.filter((order) => {
  return order.priority.higherThan(new Priority("medium"));
}).length;

