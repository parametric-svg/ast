const Set = require('es6-set');
const assign = require('object-assign');

export default ({parameters, defaults}) => {
  return {
    type: 'ParametricSvgAst',
    version: 1,
    parameters: new Set(parameters),
    defaults: assign({}, defaults),
  };
};
