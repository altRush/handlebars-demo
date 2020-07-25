var express = require('express')
const fs = require('fs')
const path = require('path')
const Handlebars = require('hbs')
var app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

const header = Handlebars.compile(
  fs.readFileSync('./views/partials/header.hbs').toString('utf-8')
)

const body = Handlebars.compile(
  fs.readFileSync('./views/partials/body.hbs').toString('utf-8')
)

const footer = Handlebars.compile(
  fs.readFileSync('./views/partials/footer.hbs').toString('utf-8')
)

Handlebars.registerPartial('body', body)
Handlebars.registerPartial('header', header)
Handlebars.registerPartial('footer', footer)

app.get('/', function (req, res) {
  res.render('layouts/main')
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Listening to port: ${port}`)
})
