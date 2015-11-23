var extend = require('util')._extend;

module.exports = (function(dictionary) {
  var xlat = {}
  var idx = {}

  xlat.index = function(dictionary) {
    var keys = Object.keys(dictionary)
    for(var i = 0; i < keys.length; i++) {
      var synonyms = dictionary[keys[i]]
      for(var j = 0; j < synonyms.length; j++) {
        // Warning: Overwrite pre-existing keys
        idx[synonyms[j]] = keys[i]
      }
    }
  }

  xlat.translate = function() {
    var args = Array.prototype.slice.call(arguments)
    var results = []
    for(var i = 0; i < args.length; i++) {
      var result = Array.isArray(args[i]) ? xlat.translate.apply(this, args[i]) : xlatObject(args[i])
      results.push(result)
    }
    return args.length == 1 ? results[0] : results
  }

  function xlatObject(object) {
    var result = {}
    var keys = Object.keys(object)
    for(var i = 0; i < keys.length; i++) {
      var propname = keys[i]
      var propvalue = object[propname]
      var newName = idx[propname] || propname
      result[newName] = typeof propvalue === 'object' ? xlatObject(propvalue) : propvalue
    }
    return result
  }

  if(dictionary) xlat.index(dictionary)

  return xlat
})
