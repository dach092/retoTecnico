"use strict";

const { getIdPlanet } = require('../../adapter/controllers/PlanetController');
const Router = require('koa-router');
const router = new Router({
    prefix: '/planet'
});

router.get('/:id', getIdPlanet);

module.exports = router;