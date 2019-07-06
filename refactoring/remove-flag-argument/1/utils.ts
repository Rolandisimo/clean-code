
export interface Order {
  deliveryTime: string;
  placedOn: {
    plusDays: (value: number) => number;
  }
}

export const anOrder: Order = {
  deliveryTime: "MH",
  placedOn: {
    plusDays: (value: number) => value,
  }
};
