describe("G2i Tests", () => {
  test("it can pass", () => {
    expect(true).toBe(true);
  });

  test("Object is a function", () => {
    expect(typeof Object).toBe("function");
  });

  test("Array is a function", () => {
    expect(typeof Array).toBe("function");
  });

  test("My Name is John", () => {
    expect("John").toBe("John");
  });

  test("it can see node env as test", () => {
    const env = process.env.NODE_ENV;
    expect(env).toEqual('test');
  })
});
