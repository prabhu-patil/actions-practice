import { test } from "node:test";
import assert from "node:assert/strict";
import { add, isPalindrome, greet } from "../src/utils.js";

test("add: sums two numbers", () => {
  assert.equal(add(2, 3), 5);
});

test("isPalindrome: detects a palindrome", () => {
  assert.equal(isPalindrome("Race car"), true);
  assert.equal(isPalindrome("hello"), false);
});

test("greet: with and without a name", () => {
  assert.equal(greet("Nitin"), "Hello, Nitin!");
  assert.equal(greet(), "Hello, stranger!");
});
