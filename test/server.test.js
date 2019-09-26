const request = require('supertest')
const app = require('../lib/app').listen(2310)

afterAll(() => {
  return app.close()
})

describe('app', () => {
  it('returns test route', () => {
    return request(app)
      .get('/api/whatever')
      .then(res => {
        return expect(res.body).toEqual({
          hello: 'world',
          blah: 'whatever',
        })
      })
  })
})
