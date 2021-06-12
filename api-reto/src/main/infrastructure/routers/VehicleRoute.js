"use strict";

const { getIdVehicle } = require('../../adapter/controllers/VehicleController');
const Router = require('koa-router');
const router = new Router({
    prefix: '/vehicle'
});

router.get('/:id', getIdVehicle);

module.exports = router;