const test = require('node:test');
const assert = require('node:assert');
const { execSync } = require('node:child_process');
const fs = require('node:fs');

test('build gera dist/soma.js funcionando', () => {
  execSync('node build.js');
  assert.ok(fs.existsSync('dist/soma.js'));
  const { soma } = require('../dist/soma');
  assert.strictEqual(soma(4, 6), 10);
});