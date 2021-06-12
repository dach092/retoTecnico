"use strict";

const { getIdSpecie } = require('../../adapter/controllers/SpecieController');
const Router = require('koa-router');
const router = new Router({
    prefix: '/specie'
});

router.get('/:id', getIdSpecie);

module.exports = router;