function gcd(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error(
      `Incorrect types passed to gcd; got ${typeof x} and ${typeof y}`
    );
  }
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

function lcm(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error(
      `Incorrect types passed to lcm; got ${typeof x} and ${typeof y}`
    );
  }
  return (x * y) / gcd(x, y);
}

export { gcd, lcm };
