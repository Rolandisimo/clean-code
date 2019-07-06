import { Order, anOrder } from "./utils";

function rushDeliveryDate(anOrder: Order) {
  let deliveryTime;

  if (["MA", "CT"].includes(anOrder.deliveryTime)) deliveryTime = 1;
  else if (["NY", "NH"].includes(anOrder.deliveryTime)) deliveryTime = 2;
  else deliveryTime = 3;

  return anOrder.placedOn.plusDays(1 + deliveryTime)
}

function defaultDeliveryDate(anOrder: Order) {
  let deliveryTime;

  if (["MA", "CT", "NY"].includes(anOrder.deliveryTime)) deliveryTime = 2;
  else if (["ME", "NH"].includes(anOrder.deliveryTime)) deliveryTime = 3;
  else deliveryTime = 4;

  return anOrder.placedOn.plusDays(2 + deliveryTime)
}

// Usage 1
rushDeliveryDate(anOrder)

// Usage 2
defaultDeliveryDate(anOrder)
