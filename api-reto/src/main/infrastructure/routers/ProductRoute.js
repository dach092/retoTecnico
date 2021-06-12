"use strict";

const { getAll, insert } = require('../../adapter/controllers/ProductController');
const Router = require('koa-router');
const router = new Router({
    prefix: '/product'
});

router.get('/', getAll);
router.post('/', insert);

module.exports = router;