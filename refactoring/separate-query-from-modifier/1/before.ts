function setOffAlarms() {/* do side-effects */}

export function alertForMiscreant(people: string[]) {
  for (const p of people) {
    if (p === "Don") {
      setOffAlarms();
      return p;
    }
    if (p === "John") {
      setOffAlarms();
      return p;
    }
  }

  return "";
}
