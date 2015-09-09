import ast from './module';

const test = require('tape-catch');
const Set = require('es6-set');

test('Returns an object of the right shape', (is) => {
  is.equal(
    ast({attributes: [], defaults: {}}).type,
    'ParametricSvgAst',
    'with the `type` property of the right value'
  );

  is.equal(
    ast({attributes: [], defaults: {}}).version,
    1,
    'with the `version` property of the right value'
  );

  is.equal(
    ast({attributes: [], defaults: {}}).attributes.constructor,
    Set,
    'with a `attributes: Set` property'
  );

  is.equal(
    ast({attributes: [], defaults: {}}).defaults.constructor,
    Object,
    'with a `defaults: Object` property'
  );

  is.end();
});

test('Returns correct `.attributes`', (is) => {
  is.equal(
    ast({attributes: [], defaults: {}}).attributes.size,
    0,
    'of zero size for an empty array'
  );

  const defaults = {};
  const attributes = [
    {address: [0],        name: 'a', dependencies: [], relation: () => {}},
    {address: [14],       name: 'a', dependencies: [], relation: () => {}},
    {address: [2, 7, 3],  name: 'a', dependencies: [], relation: () => {}},
    {address: [3, 4],     name: 'a', dependencies: [], relation: () => {}},
  ];

  is.equal(
    ast(
      {attributes, defaults}
    ).attributes.size,
    4,
    'of size `4` for an array of four nodes'
  );

  is.equal(
    ast(
      {attributes: new Set(attributes), defaults}
    ).attributes.size,
    4,
    'of size `4` for a set of four nodes'
  );

  is.end();
});

test('Returns correct `.defaults`', (is) => {
  const defaults = {a: 10};

  is.deepEqual(
    ast({attributes: [], defaults}).defaults,
    defaults,
    'of identical content as the input `defaults`'
  );

  is.notEqual(
    ast({attributes: [], defaults}).defaults,
    defaults,
    'a clone, not a reference'
  );

  is.end();
});

test('Enforces types to some extent', (is) => {
  is.throws(
    () => ast(),
    TypeError,
    'fails with a helpful message if called without arguments'
  );

  is.throws(
    () => ast({attributes: {}}),
    TypeError,
    'fails with a helpful message if `attributes` isn’t iterable'
  );

  is.end();
});
