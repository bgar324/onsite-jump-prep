export class Stock {
  symbol : string
  private _price : number
  constructor(symbol : string, _price : number){
    this.symbol = symbol
    this._price = _price
  }

  get price() : number {
    return this._price;
  }

  updatePrice(newPrice : number) : void {
    this._price = newPrice
  }

  basisPointsChange(bps : number) : void {
    const factor = 1 + bps/10_000
    this._price = +(this.price * factor).toFixed(2)
  }

  toJSON(){
    return {
      symbol : this.symbol,
      price : this.price
    }
  }
}