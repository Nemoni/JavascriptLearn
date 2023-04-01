/* eslint-env mocha */
import { add } from "../lesson2/functions.js";
import assert from "assert";

describe("add", function () {
  it("should add two numbers", function () {
    assert.equal(add(2, 3), 5);
    assert.equal(add(0, 0), 0);
    assert.equal(add(-1, 1), 0);
    assert.equal(add(-3, 2), -1);
  });
});
