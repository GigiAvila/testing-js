const { sum, multiply, divide } = require("./02-math");

describe("test for maths", () => {
  describe("test for sum", () => {
    test("adds 1 + 3 sholud be 4", () => {
      const rta = sum(1, 3);
      expect(rta).toBe(4);
    });
  });
  describe("test for multiply", () => {
    test("sholud be 4", () => {
      const rta = multiply(1, 5);
      expect(rta).toBe(5);
    });
  });
  describe("test for divide", () => {
    test("should be 6", () => {
      const rta = divide(6, 2);
      expect(rta).toBe(3);
      const rta2 = divide(5, 0);
      expect(rta2).toBeNull();
    });
  });
});
