"use strict";

const { getIdFilm } = require('../../adapter/controllers/FilmController');
const Router = require('koa-router');
const router = new Router({
    prefix: '/film'
});

router.get('/:id', getIdFilm);

module.exports = router;