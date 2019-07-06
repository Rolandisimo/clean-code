import { Order, anOrder } from "./utils";

function deliveryDate(anOrder: Order, isRush: boolean) {
  if (isRush) {
    let deliveryTime;

    if (["MA", "CT"].includes(anOrder.deliveryTime)) deliveryTime = 1;
    else if (["NY", "NH"].includes(anOrder.deliveryTime)) deliveryTime = 2;
    else deliveryTime = 3;

    return anOrder.placedOn.plusDays(1 + deliveryTime)
  } else {
    let deliveryTime;

    if (["MA", "CT", "NY"].includes(anOrder.deliveryTime)) deliveryTime = 2;
    else if (["ME", "NH"].includes(anOrder.deliveryTime)) deliveryTime = 3;
    else deliveryTime = 4;

    return anOrder.placedOn.plusDays(2 + deliveryTime)
  }
}

// Usage 1
deliveryDate(anOrder, true)

// Usage 2
deliveryDate(anOrder, false)
