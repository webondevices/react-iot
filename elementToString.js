const selfClosingElements = [/* todo */];

const nodeToString = (node) => {
  if (!node) return '';
  if (typeof node !== 'object') return String(node);

  const { type, props, children } = node;

  const childrenString = children
    .map(nodeToString)
    .join('');

  const propsString = []
    .concat(
      Object.keys(props)
        .filter(prop => typeof props[prop] === 'string')
        .map(prop => `${prop}="${props[prop].replace(/"/g, '\\"')}"`),
      Object.keys(props)
        .filter(prop => typeof props[prop] === 'boolean' && prop)
    )
    .join('');

  const isSelfClosing = !childrenString && selfClosingElements.indexOf(type) !== -1;

  const openingTag = isSelfClosing ? `<${type} ${propsString}` : `<${type} ${propsString}>`;
  const closingTag = isSelfClosing ? '/>' : `</${type}>`;

  return `${openingTag}${childrenString}${closingTag}`;
};

module.exports = element => nodeToString(element.toJSON());
