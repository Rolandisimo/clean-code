import { ZerosFiller } from "helpers/fillers/ZerosFiller";

describe("ZerosFiller", () => {
  it("should return the input data concatenated with the right number of zeros", () => {
    const filler = new ZerosFiller();
    const inputData = "1";
    const expectedFilledData = "0001";
    expect(filler.fill(inputData, 3)).toEqual(expectedFilledData);
  });
  it("should return the input data concatenated with the right number of zeros for a float", () => {
    const filler = new ZerosFiller();
    const inputData = "1.1";
    const expectedFilledData = "0001.1";
    expect(filler.fill(inputData, 3)).toEqual(expectedFilledData);
  });
});
