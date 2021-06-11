const TestRoute = require('../routers/TestRoute');
const Router = require('koa-router');
const router = new Router();

router.use(TestRoute.routes(), TestRoute.allowedMethods());

module.exports = router.routes();
