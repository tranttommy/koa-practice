const Koa = require('koa')
const app = new Koa()
const router = new require('koa-router')()

app.use(require('koa-logger')())

router.get('/:blah', ctx => {
  ctx.body = { body: ctx.params.blah }
})

app.use(router.routes())

app.listen(2309)
console.log('Server listening at 2309')
