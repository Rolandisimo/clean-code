export interface Reading {
  temp: number;
  time: string;
}
export interface Station {
  name: string;
  readings: Reading[]
}

export function readingsOutsideRange(station: Station, min: number, max: number) {
  return station.readings
    .filter(r => r.temp < min || r.temp > max);
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
 * const alerts = readingsOutsideRange(
 *   station,
 *   operatingPlan.temperatureFloor,
 *   operatingPlan.temperatureCeiling,
 * );
 * ```
 */
