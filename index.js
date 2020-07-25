const app = require('express')()
const path = require('path')

require('./views/register-partials')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.get('/', function (req, res) {
  res.render('layouts/main')
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Listening to port: ${port}`)
})
