export class ExchangeRateDaily {
  // Calculate closeDiff as percentage difference between close and open
  constructor(
    public date: string,
    public open: number,
    public close: number,
    public high: number,
    public low: number,
    public closeDiff = ((close - open) / open) * 100,
  ) {}
  // Static method to create an instance from JSON data
  static fromJson(json: any): ExchangeRateDaily {
    const open = parseFloat(json.open);
    const close = parseFloat(json.close);
    const closeDiff = ((close - open) / open) * 100;

    return new ExchangeRateDaily(
      json.date,
      open,
      close,
      parseFloat(json.high),
      parseFloat(json.low),
    );
  }
}
