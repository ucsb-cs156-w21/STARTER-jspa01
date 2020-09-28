import { gcd, lcm } from "main/rationals/Helpers";

describe("gcd tests", () => {
  test("gcd of 12 and 3 is 3", () => {
    const result = gcd(12, 3);
    expect(result).toBe(3);
  });

  test("gcd throws an error when an incorrect type is passed for either argument", () => {
    expect(() => gcd({}, 2)).toThrow();
    expect(() => gcd(1, {})).toThrow();
  });
});

describe("lcm tests", () => {
  test("lcm of 3 and 5 is 15", () => {
    const result = lcm(3, 5);
    expect(result).toBe(15);
  });

  test("lcm throws an error when an incorrect type is passed for either argument", () => {
    expect(() => lcm({}, 2)).toThrow();
    expect(() => lcm(1, {})).toThrow();
  });
});
