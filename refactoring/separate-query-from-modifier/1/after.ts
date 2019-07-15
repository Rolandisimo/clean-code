import { setOffAlarms } from "./utils";

export function alertForMiscreant(people: string[]) {
  if (findMiscreant(people)) {
    setOffAlarms();
  }
}

export function findMiscreant(people: string[]) {
  for (const p of people) {
    if (p === "Don") {
      return p;
    }
    if (p === "John") {
      return p;
    }
  }

  return "";
}
