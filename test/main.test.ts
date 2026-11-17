import { test } from "node:test";
import assert from "node:assert/strict";
import { evenOrOdd, Is } from "../src/main.ts";

test("returns Is.Even for even numbers", () => {
  assert.equal(evenOrOdd(2), Is.Even);
  assert.equal(evenOrOdd(0), Is.Even);
  assert.equal(evenOrOdd(-4), Is.Even);
});

test("returns Is.Odd for odd numbers", () => {
  assert.equal(evenOrOdd(3), Is.Odd);
  assert.equal(evenOrOdd(-1), Is.Odd);
});

test("throws on non-integer input", () => {
  assert.throws(() => evenOrOdd(1.5), TypeError);
  assert.throws(() => evenOrOdd(NaN), TypeError);
});
