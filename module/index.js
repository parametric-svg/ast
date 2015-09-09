const Set = require('es6-set');
const assign = require('object-assign');

 /**
  * @module {Function} parametric-svg-ast
  *
  * @param {Object} args
  * @param {Object[]} args.attributes
  *   An iterable of objects, each representing a parametric attribute. Each
  *   should contain the following properties:
  *
  *   * `address` – an array defining the path of the attribute’s parent node
  *     in its XML DOM tree as a series of numbers. The address
  *     of the root node is []. The address of the nth node `a`
  *     in any other node `b` is `[...<address of b>, n - 1]`. For example,
  *     the node `<c>` in the document `<a>some text<b><c></c></b></a>`
  *     has the address `[1, 0]`.
  *
  *   * `name` – the name of the attribute without the namespace prefix.
  *     The name of the attribute `parametric:a` attribute is `'a'`.
  *
  *   * `dependencies` – an array of identifiers of all variables needed
  *     to evaluate the attribute’s expression. If a parametric attribute
  *     is declared as `a - b * 5`, its dependencies are `['a', 'b']`.
  *
  *   * `relation` – the value of the parameter as a JavaScript function.
  *     Arguments will be passed to the function in the same order in which
  *     they appear in `dependencies`. The relation of a parametric attribute
  *     declared as `a - b * 5` is `(a, b) => a - b * 5`.
  *
  * @param {Object[]} args.defaults
  *   An iterable of objects, each representing a `<ref>` element
  *   – the default value of a variable. Each should contain
  *   the following properties:
  *
  *   * `identifier` – The value of the `param` attribute.
  *
  *   * `dependencies` – identifiers of all variables needed to evaluete the
  *     `relation`. The format is the same as in `attributes.dependencies`.
  *
  *   * `relation` – the value of the `default` attribute as a JavaScript
  *     function. The format is the same as in `attributes.relation`.
  */
export default ({attributes, defaults}) => {
  return {
    type: 'ParametricSvgAst',
    version: 1,
    attributes: new Set(attributes),
    defaults: new Set(defaults),
  };
};
