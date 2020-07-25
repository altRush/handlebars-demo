const fs = require('fs')
const Handlebars = require('hbs')

const convertToPartials = path => {
  return fs.readFileSync(path).toString('utf-8')
}

Handlebars.registerPartial(
  'header',
  convertToPartials('./views/partials/header.hbs')
)

Handlebars.registerPartial(
  'body',
  convertToPartials('./views/partials/body.hbs')
)

Handlebars.registerPartial(
  'footer',
  convertToPartials('./views/partials/footer.hbs')
)

module.exports = null
