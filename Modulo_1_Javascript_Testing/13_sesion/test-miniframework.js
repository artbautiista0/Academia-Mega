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
    toEqual(expected) {
      const actualStr = JSON.stringify(actual);
      const expectedStr = JSON.stringify(expected);
      if (actualStr !== expectedStr) {
        throw new Error(`Esperado: ${expectedStr}, pero se recibió: ${actualStr}`);
      }
    }
  };
}

async function run() {
  for (const { description, callback } of tests) {
    try {
      await callback();
      console.log(`✅ ${description}`);
    } catch (error) {
      console.error(`❌ ${description}`);
      console.error(`   ${error.message}`);
    }
  }
}

module.exports = { test, expect, run };