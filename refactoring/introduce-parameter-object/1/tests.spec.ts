import {
  readingsOutsideRange,
  Station,
} from "./before";

describe("extract-class", () => {
  describe("1", () => {
    describe("readingsOutsideRange", () => {
      it("should get correct readings", () => {
        const station: Station = {
          name: "ZB1",
          readings: [
            { temp: 47, time: "2016-11-10 9:10" },
            { temp: 53, time: "2016-11-10 9:20" },
            { temp: 58, time: "2016-11-10 9:30" },
            { temp: 54, time: "2016-11-10 9:40" },
            { temp: 51, time: "2016-11-10 9:50" },
          ],
        };

        expect(readingsOutsideRange(station, 50, 55)).toEqual([
          { temp: 47, time: "2016-11-10 9:10" },
          { temp: 58, time: "2016-11-10 9:30" },
        ]);
      });
      it("should get no readings", () => {
        const station: Station = {
          name: "ZB1",
          readings: [
            { temp: 47, time: "2016-11-10 9:10" },
            { temp: 53, time: "2016-11-10 9:20" },
            { temp: 58, time: "2016-11-10 9:30" },
            { temp: 54, time: "2016-11-10 9:40" },
            { temp: 51, time: "2016-11-10 9:50" },
          ],
        };

        expect(readingsOutsideRange(station, 47, 58)).toEqual([]);
      });
    });
  });
})
