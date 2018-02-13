const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const convert = require('koa-convert')
const koaStatic = require('koa-static')
const koaLogger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')

const routers = require('./routes/index')
const config = require('./config/config')

const app = new Koa()

// 配置控制台日志中间件
app.use(convert(koaLogger()))

// 使用ctx.body解析中间件
app.use(bodyParser())

// 配置服务端模板渲染引擎中间件
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs',
}))

// 配置静态资源加载中间件
app.use(convert(koaStatic(
    path.join(__dirname, './static'),
)))

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods())

// 连接数据库。请先安装并启动数据库(参照：http://www.runoob.com/mongodb/mongodb-osx-install.html)
mongoose.Promise = global.Promise
mongoose.connect(config.database, {
  connectTimeoutMS: 5000,
  useMongoClient: true,     // Note that mongoose will **not** pull `bufferCommands` from the query string
}).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
      console.log('mongoose connect result: success')
    },
    () => { /** handle initial connection error */
      console.log('mongoose connect result: fail')
    },

  )

app.listen(config.port)
console.log('The server is on prot 3000')
