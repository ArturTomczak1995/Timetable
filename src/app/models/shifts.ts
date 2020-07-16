export class Shifts {
  constructor(
    public shiftStart: number,
    public shiftEnd: number,
  ) {}

  private id: number;

  getid(): number {
    return this.id;
  }

  setid(value: number) {
    this.id = value;
  }

  getshiftStart(): number {
    return this.shiftStart;
  }

  setshiftStart(value: number) {
    this.shiftStart = value;
  }

  getshiftEnd(): number {
    return this.shiftEnd;
  }

  setshiftEnd(value: number) {
    this.shiftEnd = value;
  }
}
