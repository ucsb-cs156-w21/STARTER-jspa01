import { gcd, lcm } from "./Helpers";

describe("gcd tests", () => {
  test("gcd of 12 and 3 is 3", () => {
    const result = gcd(12, 3);
    expect(result).toBe(3);
  });
});

describe("lcm tests", () => {
  test("lcm of 3 and 5 is 15", () => {
    const result = lcm(3, 5);
    expect(result).toBe(15);
  });
});
