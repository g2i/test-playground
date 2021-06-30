function getName() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Roger Mori"), 1000);
  });
}

function equal(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => (a === b ? resolve(true) : reject(false)), 1000);
  });
}

describe("Interview Tests", () => {
  test("true is true", () => {
    return expect(equal(1 < 2, true)).resolves.toBe(true);
  });
  test("1 not equal to '1'", () => {
    return expect(equal(1, "1")).rejects.toBe(false);
  });
  test("Interviewee's name is Roger Mori", () => {
    return expect(getName()).resolves.toBe("Roger Mori");
  });
});
