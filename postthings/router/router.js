let news = require('./news')

let codes = require('./register')

let login = require('./login')

var option = Object.assign({},news,codes,login)

module.exports = option