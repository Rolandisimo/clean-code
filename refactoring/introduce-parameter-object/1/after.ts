export interface Reading {
  temp: number;
  time: string;
}
export interface Station {
  name: string;
  readings: Reading[]
}

export function readingsOutsideRange(station: Station, range: NumberRange) {
  return station.readings
    .filter(r => !range.contains(r.temp));
}

export class NumberRange {
  private data: { min: number; max: number; };
  constructor(min: number, max: number) {
    this.data = { min, max };
  }

  get min() { return this.data.min; }
  get max() { return this.data.max; }
  public contains(value: number) { return value >= this.min && value <= this.max }
}

/**
 * USAGE example
 * ```typescript
 * const station: Station = {
 *   name: "ZB1",
 *   readings: [
 *     { temp: 47, time: "2016-11-10 9:10" },
 *     { temp: 53, time: "2016-11-10 9:20" },
 *     { temp: 58, time: "2016-11-10 9:30" },
 *     { temp: 54, time: "2016-11-10 9:40" },
 *     { temp: 51, time: "2016-11-10 9:50" },
 *   ],
 * };
 *
 * const range = new NumberRange(operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling);
 * const alerts = readingsOutsideRange(
 *   station,
 *   range,
 * );
 * ```
 */
