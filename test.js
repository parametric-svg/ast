const test = require('tape-catch');

test.skip('Returns an object of the right shape', (is) => {
  is.equal(
    'with the `type` property of the right value'
  );

  is.equal(
    'with the `version` property of the right value'
  );

  is.end();
});

test.skip('Enforces types', (is) => {
  is.equal(
    'fails with a helpful message if `nodes` isn’t an iterator'
  );

  is.end();
});
