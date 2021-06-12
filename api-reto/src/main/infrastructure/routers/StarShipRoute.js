"use strict";

const { getIdStarShip } = require('../../adapter/controllers/StarShipController');
const Router = require('koa-router');
const router = new Router({
    prefix: '/starship'
});

router.get('/:id', getIdStarShip);

module.exports = router;