export class Person {
  private _name = "";
  private _telephoneNumber = new TelephoneNumber("", "");

  get name() { return this._name; }
  set name(arg: string) { this._name = arg; }

  get telephoneNumber() { return this._telephoneNumber.toString(); }

  get officeAreaCode() { return this._telephoneNumber.areaCode; }
  set officeAreaCode(arg: string) {
    this._telephoneNumber = new TelephoneNumber(arg, this.officeNumber);
  }

  get officeNumber() { return this._telephoneNumber.number; }
  set officeNumber(arg: string) {
    this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg);
  }
}

export class TelephoneNumber {
  private _areaCode = "";
  private _number = "";

  public constructor(areaCode: string, number: string) {
    this._areaCode = areaCode;
    this._number = number;
  }

  public toString() { return `${this.areaCode}${this.number}`; }
  get areaCode() { return this._areaCode; }
  get number() { return this._number; }
}
