const Router = require("koa-router");

const router = new Router();

const test = [
    {
        Name: "Tomás",
        Age: 23
    }
];

router.get('route_test.show', '/', async (ctx) => {
    ctx.body = JSON.stringify(test);
})

module.exports = router;