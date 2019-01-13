const Koa = require('koa')
const app = new Koa()
var money = 100
var luckyNum = 123456;
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*")
  await next()
})
app.use(async (ctx, next) => {
  if (ctx.request.path === '/') {
    ctx.response.body = '你连通了后端'
  } else {
    await next()
  }
})
app.use(async (ctx, next) => {
  if (ctx.request.path === '/getMoney') {
    ctx.response.body = money
  } else {
    await next()
  }
})
app.use(async (ctx, next) => {
  if (ctx.request.path === '/setMoney') {
    var m = parseInt(ctx.request.query.money)
    money = money + m
    ctx.response.body = 1
  } else {
    await next()
  }
})
app.use(async (ctx, next) => {
  if (ctx.request.path === '/checkNum') {
    if (ctx.request.query.num == luckyNum) {
      ctx.response.body = 1
    } else {
      ctx.response.body = 0
    }
  } else {
    await next()
  }
})
app.use(async (ctx, next) => {
  if (ctx.request.path === '/getBonus') {
    ctx.response.body = 5000
  } else {
    await next()
  }
})
app.listen(3000)
console.log('后端服务器启动了，监听3000端口！')