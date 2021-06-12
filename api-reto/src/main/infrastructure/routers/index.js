"use strict";

const PeopleRoute = require('../routers/PeopleRoute');
const FilmRoute = require('../routers/FilmRoute');
const PlanetRoute = require('../routers/PlanetRoute');
const SpecieRoute = require('../routers/SpecieRoute');
const StarShipRoute = require('../routers/StarShipRoute');
const VehicleRoute = require('../routers/VehicleRoute');

const Router = require('koa-router');
const router = new Router({
    prefix: '/api'
});

router.use(PeopleRoute.routes(), PeopleRoute.allowedMethods());
router.use(FilmRoute.routes(), FilmRoute.allowedMethods());
router.use(PlanetRoute.routes(), PlanetRoute.allowedMethods());
router.use(SpecieRoute.routes(), SpecieRoute.allowedMethods());
router.use(StarShipRoute.routes(), StarShipRoute.allowedMethods());
router.use(VehicleRoute.routes(), VehicleRoute.allowedMethods());

module.exports = router.routes();
