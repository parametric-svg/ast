const Map = require('es6-map');

export default (parameters) => {
  return {
    type: 'ParametricSvgAst',
    version: 1,
    parameters: new Map(parameters),
  };
};
