import ast from './module';

const test = require('tape-catch');
const Map = require('es6-map');
const Set = require('es6-set');

test('Returns an object of the right shape', (is) => {
  is.equal(
    ast([]).type,
    'ParametricSvgAst',
    'with the `type` property of the right value'
  );

  is.equal(
    ast([]).version,
    1,
    'with the `version` property of the right value'
  );

  is.equal(
    ast([]).parameters.constructor,
    Map,
    'with a `parameters: Map` property'
  );

  is.end();
});

test('Returns correct `.parameters`', (is) => {
  is.equal(
    ast([]).parameters.size,
    0,
    'of zero size for an empty array'
  );

  const dummyParameter = {a: {dependencies: [], relation: () => {}}};
  const dummyParameters = [
    [[0], dummyParameter],
    [[14], dummyParameter],
    [[2, 7, 3], dummyParameter],
    [[3, 4], dummyParameter],
  ];

  is.equal(
    ast(
      dummyParameters
    ).parameters.size,
    4,
    'of size `4` for an array of four nodes'
  );

  is.equal(
    ast(
      new Set(dummyParameters)
    ).parameters.size,
    4,
    'of size `4` for a set of four nodes'
  );

  is.end();
});

test.skip('Enforces types', (is) => {
  is.equal(
    'fails with a helpful message if `parameters` isn’t an iterator'
  );

  is.end();
});
