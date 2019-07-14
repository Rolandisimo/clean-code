export class Person {
  private _name = "";
  private _telephoneNumber: TelephoneNumber;

  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }

  get name() { return this._name; }
  set name(arg: string) { this._name = arg; }

  get telephoneNumber() { return this._telephoneNumber.toString(); }

  get officeAreaCode() { return this._telephoneNumber.areaCode; }
  set officeAreaCode(arg: string) { this._telephoneNumber.areaCode = arg; }

  get officeNumber() { return this._telephoneNumber.number; }
  set officeNumber(arg: string) { this._telephoneNumber.number = arg; }
}

export class TelephoneNumber {
  private _areaCode = "";
  private _number = "";

  public toString() { return `${this.areaCode}${this.number}`; }

  get areaCode() { return this._areaCode; }
  set areaCode(arg: string) { this._areaCode = arg; }

  get number() { return this._number; }
  set number(arg: string) { this._number = arg; }
}
