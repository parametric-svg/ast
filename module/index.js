const Set = require('es6-set');
const assign = require('object-assign');

export default ({attributes, defaults}) => {
  return {
    type: 'ParametricSvgAst',
    version: 1,
    attributes: new Set(attributes),
    defaults: assign({}, defaults),
  };
};
