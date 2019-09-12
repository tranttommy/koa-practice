const Koa = require('koa')
const app = new Koa()

app.use(require('koa-logger')())
app.use(require('koa-static')('./public'))
app.use(require('./routes').routes())

module.exports = app
