const PORT = process.env.PORT || 2309
require('./lib/app').listen(PORT, () => {
  console.log(`Server listening at ${PORT}`)
})
