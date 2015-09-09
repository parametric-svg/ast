import ast from './module';

const test = require('tape-catch');
const Set = require('es6-set');

test('Returns an object of the right shape', (is) => {
  is.equal(
    ast({parameters: [], defaults: {}}).type,
    'ParametricSvgAst',
    'with the `type` property of the right value'
  );

  is.equal(
    ast({parameters: [], defaults: {}}).version,
    1,
    'with the `version` property of the right value'
  );

  is.equal(
    ast({parameters: [], defaults: {}}).parameters.constructor,
    Set,
    'with a `parameters: Set` property'
  );

  is.equal(
    ast({parameters: [], defaults: {}}).defaults.constructor,
    Object,
    'with a `defaults: Object` property'
  );

  is.end();
});

test('Returns correct `.parameters`', (is) => {
  is.equal(
    ast({parameters: [], defaults: {}}).parameters.size,
    0,
    'of zero size for an empty array'
  );

  const defaults = {};
  const parameters = [
    {address: [0],        name: 'a', dependencies: [], relation: () => {}},
    {address: [14],       name: 'a', dependencies: [], relation: () => {}},
    {address: [2, 7, 3],  name: 'a', dependencies: [], relation: () => {}},
    {address: [3, 4],     name: 'a', dependencies: [], relation: () => {}},
  ];

  is.equal(
    ast(
      {parameters, defaults}
    ).parameters.size,
    4,
    'of size `4` for an array of four nodes'
  );

  is.equal(
    ast(
      {parameters: new Set(parameters), defaults}
    ).parameters.size,
    4,
    'of size `4` for a set of four nodes'
  );

  is.end();
});

test('Returns correct `.defaults`', (is) => {
  const defaults = {a: 10};

  is.deepEqual(
    ast({parameters: [], defaults}).defaults,
    defaults,
    'of identical content as the input `defaults`'
  );

  is.notEqual(
    ast({parameters: [], defaults}).defaults,
    defaults,
    'a clone, not a reference'
  );

  is.end();
});

test.skip('Enforces types', (is) => {
  is.equal(
    'fails with a helpful message if `parameters` isn’t an iterator'
  );

  is.end();
});
