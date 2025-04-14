const tests = [];

function test(description, callback) {
  tests.push({ description, callback });
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Esperado: ${expected}, pero se recibió: ${actual}`);
      }
    },
    toThrow() {
      try {
        actual();
      } catch {
        return;
      }
      throw new Error("Esperado que la función lanzara un error, pero no lo hizo.");
    }
  };
}

function run() {
  for (const { description, callback } of tests) {
    try {
      callback();
      console.log(`✅ ${description}`);
    } catch (error) {
      console.error(`❌ ${description}`);
      console.error(`   ${error.message}`);
    }
  }
}

module.exports = { test, expect, run };
