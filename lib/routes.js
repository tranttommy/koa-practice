const router = new (require('koa-router'))({
  prefix: '/api'
})

router.get('/:blah', ctx => {
  ctx.body = { hello: 'world', ...ctx.params }
})

module.exports = router
