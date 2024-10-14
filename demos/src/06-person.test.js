const Person = require("./06-person.js");

describe("Test for Person", () => {
  let person;
  beforeEach(() => {
    person = new Person("Nicolas", 54, 1.6);
  });

  test("should return down", () => {
    person.weight = 42;
    const imc = person.calcIMC();
    expect(imc).toBe("down");
  });

  test("should return normal", () => {
    person.weight = 54;
    const imc = person.calcIMC();
    expect(imc).toBe("normal");
  });
});
