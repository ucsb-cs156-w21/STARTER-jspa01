import { gcd, lcm } from "./Helpers";

export default class Rational {
  constructor(numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
      throw new Error(
        `Incorrect types passed to Rational constructor; got ${typeof numerator} and ${typeof denominator}`
      );
    }

    if (denominator === 0) {
      throw new Error("Denominator can not be 0");
    }

    this.numerator = numerator;
    this.denominator = denominator;
    if (numerator !== 0) {
      const greatestCommonDivisor = gcd(numerator, denominator);
      this.numerator /= greatestCommonDivisor;
      this.denominator /= greatestCommonDivisor;
    }
    return this;
  }

  toString() {
    return `${this.numerator}/${this.denominator}`;
  }

  plus(other) {
    checkIfRational(other);
    if (this.numerator === 0)
      return new Rational(other.numerator, other.denominator);
    if (other.numerator === 0)
      return new Rational(this.numerator, this.denominator);

    const numGCD = gcd(this.numerator, other.numerator);
    const denomGCD = gcd(this.denominator, other.denominator);

    const numerator =
      (this.numerator / numGCD) * (other.denominator / denomGCD) +
      (other.numerator / numGCD) * (this.denominator / denomGCD);
    const denominator = lcm(this.denominator, other.denominator);

    return new Rational(numerator, denominator);
  }

  static sum(first, second) {
    checkIfRational(first);
    checkIfRational(second);

    return first.plus(second);
  }

  minus(other) {
    checkIfRational(other);

    return new Rational(0, 1);
  }

  static subtract(first, second) {
    checkIfRational(first);
    checkIfRational(second);

    return first.minus(second);
  }
}

function checkIfRational(object) {
  if (typeof object === Rational) {
    throw new Error(`Not a Rational object; instead was ${typeof object}`);
  }
  return true;
}
