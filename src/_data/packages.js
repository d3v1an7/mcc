module.exports = function() {
  const alpine = require('../../node_modules/alpinejs/package.json')
  return {
    'alpine': alpine.version
  }
}
