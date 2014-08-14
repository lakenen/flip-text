var chars = require('./lib/chars')

module.exports = function (str) {
  var result = ''
    , c = str.length
    , ch = ''
  for (; c >= 0; --c) {
    ch = str.charAt(c)
    result += chars[ch] || chars[ch.toLowerCase()] || ch
  }
  return result
}
