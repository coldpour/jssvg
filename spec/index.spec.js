const svgTags = require('svg-tags')
const jssvg = require('../index')

describe('jssvg', () => {
  it('has the tag functions', () => {
    expect(jssvg.animate({ foo: 'bar' })).toEqual('<animate foo="bar" />')
  })

  it('has all the functions', () => {
    expect(Object.keys(jssvg).length).toEqual(svgTags.length)
  })
})
