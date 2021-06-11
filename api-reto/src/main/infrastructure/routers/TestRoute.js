"use strict";
const { testhola } = require('../../adapter/controllers/TestController')
const Router = require('koa-router');
const router = new Router({
    prefix: '/test'
});

router.get("/", testhola);

module.exports = router;