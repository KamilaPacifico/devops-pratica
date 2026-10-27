const test = require('node:test');
const assert = require('node:assert');
const { soma } = require('../src/soma');

test('soma 2 + 3 resulta em 5', () => {
  assert.strictEqual(soma(2, 3), 5);
});