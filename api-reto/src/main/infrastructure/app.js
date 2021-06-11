"use strict";
const Koa = require('koa');
const routes = require('./routers/index');

const app = new Koa();

app.use(routes);

module.exports = app;

