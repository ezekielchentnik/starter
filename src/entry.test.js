import { something } from "./entry.js";

// https://jestjs.io/docs/en/expect

describe("something", () => {
  test("something exists", () => {
    expect(something).toBeDefined();
  });
});
