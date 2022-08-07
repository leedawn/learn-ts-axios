const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extends: true }))

const compiler = webpack(WebpackConfig)
const router = express.Router()

router.get('/simple/get', function(req, res) {
  res.json({
    msg: 'hello world'
  })
})
router.get('/base/get', function(req, res) {
  res.json(req.query)
})
router.post('/base/post', function(req, res) {
  // express 没有内置处理 post 请求体的功能，需要通过 bodyParser 进行处理
  res.json(req.body)
})

router.post('/base/buffer', function(req, res) {
  let msg = []
  req.on('data', chunk => {
    if (chunk) {
      msg.push(chunk)
    }
  })
  req.on('end', () => {
    let buf = Buffer.concat(msg)
    res.json(buf.toJSON())
  })
})
router.get('/error/get', function(req, res) {
  if (Math.random() > 0.5) {
    res.json({
      msg: 'hello world'
    })
  } else {
    res.status(500)
    res.end()
  }
})
router.get('/error/timeout', function(req, res) {
  setTimeout(() => {
    res.json({
      msg: 'hello world'
    })
  }, 3000)
})

const methods1 = ['get', 'options', 'delete', 'head']
methods1.forEach(method => {
  router[method]('/extend/' + method, function(req, res) {
    res.json(req.query)
  })
})

const methods2 = ['post', 'put', 'patch']
methods2.forEach(method => {
  router[method]('/extend/' + method, function(req, res) {
    // express 没有内置处理 post 请求体的功能，需要通过 bodyParser 进行处理
    res.json(req.body)
  })
})

app.use(router)

app.use(
  webpackDevMiddleware(compiler, {
    // webpack-dev-server 内部使用了 webpack-dev-middleware，但是 webpack-dev-middleware 可以单独使用，这样可以进行更多自定义配置
    publicPath: '/__build__/',
    stats: {
      colors: true,
      chunks: false
    }
  })
)

app.use(webpackHotMiddleware(compiler))
app.use(express.static(__dirname))

const port = process.env.PORT || 8080
module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
