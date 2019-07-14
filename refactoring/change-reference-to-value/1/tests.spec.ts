import { Person } from "./before";

describe("extract-class", () => {
  describe("1", () => {
    describe("Person", () => {
      it("should create name and telephone number", () => {
        const person = new Person();
        person.name = "John";
        person.officeAreaCode = "+371";
        person.officeNumber = "22334455";

        expect(person.name).toBe("John");
        expect(person.telephoneNumber).toBe("+37122334455");
      });

      it("should not have name and telephone number by default", () => {
        const person = new Person();
        expect(person.name).toBe("");
        expect(person.telephoneNumber).toBe("");
      });
    })
  });
})
