"use strict";

const { getIdPeople } = require('../../adapter/controllers/PeopleController');
const Router = require('koa-router');
const router = new Router({
    prefix: '/people'
});

router.get('/:id', getIdPeople);

module.exports = router;