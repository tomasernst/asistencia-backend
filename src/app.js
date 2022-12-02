const Koa = require("koa")
const KoaLogger = require("koa-logger")
//const KoaBody = require("koa-body")
const router = require("./routes")

const app = new Koa();

app.use(KoaLogger());
//app.use(KoaBody());

app.use(router.routes());

app.listen(3000, () => {
    console.log("Starting app in port 3000")
});

