import { isDeepEqual } from "../src/index.js";
import { expect, jest, test } from "@jest/globals";

describe("String Tests", function () {
  test("String equal test", () => {
    let a = "first";
    let b = "first";
    expect(isDeepEqual(a, b)).toBe(true);
  });

  test("String not equal test", () => {
    let a = "first";
    let b = "First";
    expect(isDeepEqual(a, b)).toBe(false);
  });
});
