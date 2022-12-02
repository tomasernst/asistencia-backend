const Koa = require("koa")
const KoaLogger = require("koa-logger")
//const KoaBody = require("koa-body")
const router = require("./routes")
const orm = require("./models")

const app = new Koa();

app.context.orm = orm;

app.use(KoaLogger());
//app.use(KoaBody());

app.use(router.routes());

app.listen(3000, () => {
    console.log("Starting app in port 3000")
});

module.exports = app;

