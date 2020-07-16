export class Leave {
  constructor(
    public leaveReason: string
  ) {}

  private id: number;

  getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
  }
}
