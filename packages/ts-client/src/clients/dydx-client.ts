import Markets from "../modules/markets";

export class DydxClient {
  readonly host: string;
  private _markets: Markets;

  constructor(
    host: string,
  ) {
    this.host = host;

    this._markets = new Markets(this.host);
  }

  get markets() {
    return this._markets;
  }
};
