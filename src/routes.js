const Router = require("koa-router");
const route_test = require("./routes/route_test")

const router = new Router();

router.use('/test', route_test.routes());

module.exports = router;