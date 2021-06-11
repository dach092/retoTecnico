
const { testhola } = require('../../adapter/controllers/TestController')
const Router = require('koa-router');
const router = new Router();

router.get("/test", testhola);

module.exports = router;