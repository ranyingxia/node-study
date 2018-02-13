const router = require('koa-router')()
const userInfoController = require('../controllers/user-info')

const routers = router
    .get('/', async (ctx) => {
      const title = 'home'
      await ctx.render('home', {
        title,
      })
    })
    .post('/signup', userInfoController.signUp)
    .post('/signin', userInfoController.signIn)

module.exports = routers
