const svgTags = require('svg-tags');
const tag = require('xmltag');

module.exports = svgTags.reduce((acc, t) => {
  return Object.assign({}, acc, {[t]: tag(t)});
}, {});

// module.exports = tags;
