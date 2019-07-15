const getMock = jest.fn();
jest.mock("./mocks", () => ({
  axios: new (class Axios { public get(value: string) { getMock(value); } })()
}));

import { getActivities } from "./before";

describe("introduce-parameter-object", () => {
  describe("2", () => {
    describe("getActivities", () => {
      beforeEach(() => {
        jest.resetAllMocks();
      });

      it("should do a formatted request with before example", () => {
        getActivities(
          1,
          12,
          123456778,
          true,
          "comments",
        );

        expect(getMock).toHaveBeenCalledTimes(1);
        expect(getMock).toHaveBeenCalledWith(
          "https://web.com/1/comments?batchSize=12&timestamp=123456778&returnReviewed=true"
        );
      });
    })
  });
})
