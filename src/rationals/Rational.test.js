import Rational from "./Rational";

describe("Rational class tests", () => {
  describe("constructor tests", () => {
    test("can create a Rational object", () => {
      const rational = new Rational(1, 2);
      expect(rational.numerator).toBe(1);
      expect(rational.denominator).toBe(2);
    });
  });

  describe("sum/plus tests", () => {
    test("1/3 + 2/3 = 1/1", () => {
      const a = new Rational(1, 3);
      const b = new Rational(2, 3);

      const expected = new Rational(1, 1);
      const actual = a.plus(b);

      expect(actual).toMatchObject(expected);
    });
  });
});
