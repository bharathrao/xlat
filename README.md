# XLAT

## Translate objects from one set of keys to another

```javascript
var canonical = {
  'transaction': ['tx', 'trans'],
  'address': ['addrText', 'addr']
}

var a = {
  "transaction": { "id": "2"},
  "addr": "12345",
  "transmit": true
}

var b = {
  "tx": { "id": "9"},
  "addrText": "95645"
}

var xlat = require('xlat')(canonical)

console.log(xlat(a))

console.log(xlat(a, [a, b]))

// lets update dictionary
var addendum = { 'send': ['transmit'] }
xlat.index(addendum)

console.log(xlat(a))
```
