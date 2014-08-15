var test = require('tape')
  , flip = require('..')

test('should flip text', function (t) {
  t.equal(flip('Hello, World!'), '¡plɹoʍ \'ollǝH', 'text is flipped')
  t.end()
})
