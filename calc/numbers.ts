
interface ICalc {
  add: (val: number, second?: number) => void;
  sub: (val: number, second?: number) => void;
  mult: (val: number, second?: number) => void;
  div: (val: number, second?: number) => void;
}

class RealNumbers implements ICalc {
  private _result: number

  constructor(val: number) {
    this._result = val
  }

  public add(val: number) {
    this._result += val
  }

  public sub(val: number) {
    this._result -= val
  }

  public mult(val: number) {
    this._result *= val
  }

  public div(val: number) {
    this._result /= val
  }

  public get result() {
    return this._result
  }
}

class ComplexNumbers implements ICalc {
  private _re: number
  private _im: number
  constructor(re: number, im: number) {
    this._re = re
    this._im = im
  }

  public add(re: number, im: number | undefined) {
    if (im) {
      this._re += re
      this._im += +im
      return;
    }
    throw new Error('im is undefined')
  }

  public sub(re: number, im: number | undefined) {
    if (im) {
      this._re -= re
      this._im -= +im
      return;
    }
    throw new Error('im is undefined')
  }

  public mult(re: number, im: number | undefined) {
    if (im) {
      this._re = this._re * re - this._im * im
      this._im = this._re * im + this._im * re
      return;
    }
    throw new Error('im is undefined')
  }

  public div(re: number, im: number | undefined) {
    if (im) {
      const r = re**2 + im**2
      this._re = (this._re * re + this._im * im) / r
      this._im = (this._im * re - this._re * im) / r
      return;
    }
    throw new Error('im is undefined')
  }

}