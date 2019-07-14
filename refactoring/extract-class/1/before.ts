export class Person {
  private _name = "";
  private _officeAreaCode = "";
  private _officeNumber = "";
  get name() { return this._name; }
  set name(arg: string) { this._name = arg; }

  get telephoneNumber() { return `${this.officeAreaCode}${this.officeNumber}`; }

  get officeAreaCode() { return this._officeAreaCode; }
  set officeAreaCode(arg: string) { this._officeAreaCode = arg; }

  get officeNumber() { return this._officeNumber; }
  set officeNumber(arg: string) { this._officeNumber = arg; }
}
