'use strict'

const consolidate = require('@frctl/consolidate')
const path = require('path')

const fractal = module.exports = require('@frctl/fractal').create()
const ejsAdapter = consolidate('ejs')

fractal.set('project.title', 'Example Fractal')
fractal.set('project.version', 'v1.0')
fractal.set('project.author', 'Mickey Mouse')

fractal.components.engine(ejsAdapter)
fractal.components.set('ext', '.ejs')
fractal.components.set('path', path.join(__dirname, 'components'))

fractal.docs.set('path', path.join(__dirname, 'docs'))

fractal.web.set('static.path', path.join(__dirname, 'public'))
fractal.web.set('builder.dest', __dirname + '/build')
