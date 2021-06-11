"use strict";
const TestRoute = require('../routers/TestRoute');
const Router = require('koa-router');
const router = new Router({
    prefix: '/api'
});

router.use(TestRoute.routes(), TestRoute.allowedMethods());

module.exports = router.routes();
