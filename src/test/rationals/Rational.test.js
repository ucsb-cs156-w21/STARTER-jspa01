import Rational from "rationals/Rational";

describe("Rational class tests", () => {
  const oneThird = new Rational(1, 3);
  const twoThirds = new Rational(2, 3);
  const negativeOne = new Rational(-1, 1);
  const one = new Rational(1, 1);
  const zero = new Rational(0, 1);
  describe("constructor tests", () => {
    test("can create a Rational object", () => {
      const rational = new Rational(1, 2);
      expect(rational.numerator).toBe(1);
      expect(rational.denominator).toBe(2);
    });

    test("truncates decimals", () => {
      const expected = new Rational(3, 2);
      const actual = new Rational(3.1, 2.9);
      expect(actual).toEqual(expected);
    });

    test("resolves double negatives", () => {
      const rational = new Rational(-1, -2);
      expect(rational).toMatchObject({
        numerator: 1,
        denominator: 2,
      });
    });

    test("throws an error when an incorrect type is passed for either argument", () => {
      expect(() => new Rational({}, 2)).toThrow();
      expect(() => new Rational(1, {})).toThrow();
    });

    test("truncation triggers 0 denominator error", () => {
      expect(() => new Rational(1, 0.9)).toThrow();
    });

    test("throws an error when denominator is 0", () => {
      expect(() => new Rational(1, 0)).toThrow();
    });

    test("pushes negative to numerator", () => {
      const expected = new Rational(-1, 2);
      const actual = new Rational(1, -2);
      expect(actual).toEqual(expected);
    });
  });

  describe("toString tests", () => {
    test("matches expected output", () => {
      const expected = "1/7";
      const actual = new Rational(1, 7).toString();
      expect(actual).toEqual(expected);
    });
  });

  describe("sum/plus tests", () => {
    test("zero identity tests", () => {
      expect(one.plus(zero)).toEqual(one);
      expect(zero.plus(one)).toEqual(one);
    });

    test("1/3 + 2/3 = 1/1", () => {
      const expected = new Rational(1, 1);
      const actual = oneThird.plus(twoThirds);

      expect(actual).toMatchObject(expected);
    });

    test("1/1 + -1/1 = 0", () => {
      const expected = new Rational(0, 1);
      const actual = one.plus(negativeOne);

      expect(actual).toMatchObject(expected);
    });

    test("-1/1 + 1/1 = 0", () => {
      const expected = new Rational(0, 1);
      const actual = negativeOne.plus(one);

      expect(actual).toMatchObject(expected);
    });

    test("sum gives same result as plus", () => {
      const sumResult = Rational.sum(one, oneThird);
      const plusResult = one.plus(oneThird);

      expect(sumResult).toEqual(plusResult);
    });
  });

  describe("times/multiply tests", () => {
    test("if either rational is zero, it gives zero as result", () => {
      const expected = zero;
      const firstActual = zero.times(one);
      const secondActual = one.times(zero);

      expect(firstActual).toEqual(expected);
      expect(secondActual).toEqual(expected);
    });

    test("1/3 * 2/3 = 2/9", () => {
      const expected = new Rational(2, 9);
      const actual = oneThird.times(twoThirds);
      expect(actual).toEqual(expected);
    });

    test("1/3 * -1/1 = -1/3", () => {
      const expected = new Rational(-1, 3);
      const actual = oneThird.times(negativeOne);
      expect(actual).toEqual(expected);
    });

    test("times gives same result as multiply", () => {
      const timesResult = oneThird.times(twoThirds);
      const multiplyResult = Rational.multiply(oneThird, twoThirds);
      expect(timesResult).toEqual(multiplyResult);
    });
  });

  describe("minus/subtract tests", () => {
    test("1/1 - 1/3 = 2/3", () => {
      const expected = twoThirds;
      const actual = one.minus(oneThird);
      expect(actual).toEqual(expected);
    });

    test("1/3 - 1/1 = -2/3", () => {
      const expected = new Rational(-2, 3);
      const actual = oneThird.minus(one);
      expect(actual).toEqual(expected);
    });

    test("subtract gives same result as minus", () => {
      const subtractResult = Rational.subtract(one, twoThirds);
      const minusResult = one.minus(twoThirds);
      expect(subtractResult).toEqual(minusResult);
    });
  });

  describe("reciprocal tests", () => {
    test("reciprocal of 1/3 is 3/1", () => {
      const expected = new Rational(3, 1);
      const actual = oneThird.reciprocal();
      expect(actual).toEqual(expected);
    });

    test("throws an error when taking reciprocal of zero", () => {
      expect(() => zero.reciprocal()).toThrow();
    });
  });

  describe("dividedBy/quotient tests", () => {
    test("2/3 divided by 1/3 = 2/1", () => {
      const expected = new Rational(2, 1);
      const actual = twoThirds.dividedBy(oneThird);
      expect(actual).toEqual(expected);
    });

    test("quotient gives the same result as dividedBy", () => {
      const quotientResult = Rational.quotient(twoThirds, oneThird);
      const dividedByResult = twoThirds.dividedBy(oneThird);
      expect(quotientResult).toEqual(dividedByResult);
    });
  });

  describe("verifyIsRational tests", () => {
    test("does not accept objects, nulls, or undefined", () => {
      expect(() => Rational.verifyIsRational({})).toThrow();
      expect(() =>
        Rational.verifyIsRational({
          numerator: 1,
          denominator: 2,
        })
      ).toThrow();
      expect(() => Rational.verifyIsRational(null)).toThrow();
      expect(() => Rational.verifyIsRational(undefined)).toThrow();
    });

    test("does accept Rationals created with new Rational constructor", () => {
      const rational = new Rational(1, 1);

      expect(Rational.verifyIsRational(rational)).toBe(true);
    });
  });
});
