// describe unifica test y además permite algunas assertios adicionales

describe("Set", () => {
  beforeAll(() => {
    console.log("beforeAll");
  });

  afterAll(() => {
    console.log("afterAll");
  });

  beforeEach(() => {
    console.log("beforeEach");
  });

  afterEach(() => {
    console.log("afterEach");
  });

  test("case 1", () => {
    console.log("case 1");
    expect(1 + 1).toBe(2);
  });
  test("case 2", () => {
    console.log("case 2");
    expect(1 + 2).toBe(3);
  });
  describe("Set2", () => {
    beforeAll(() => {
      console.log("beforeAllSet2");
    });

    test("case 3", () => {
      console.log("case 3");
      expect(1 + 1).toBe(2);
    });
    test("case 4", () => {
      console.log("case 4");
      expect(1 + 2).toBe(3);
    });
  });
});
