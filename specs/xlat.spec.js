var expect = require('expect.js')
var fixtures = require('fixtures.js')(__filename)
var xlat = require('../index')(fixtures.dictionary)

describe('Translator', function() {

  it('should translate a single object', function() {
    var result = xlat.translate(fixtures.single.source)
    expect(result).to.eql(fixtures.single.result)
  })
  it('should translate array', function() {
    var xlat2 = require('../index')()
    xlat2.index(fixtures.dictionary)
    var result = xlat.translate(fixtures.array.source)
    expect(result).to.eql(fixtures.array.result)
  })
})
