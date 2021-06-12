"use strict";

require('dotenv').config();

const Koa = require('koa');
const bodyParser =  require('koa-bodyparser');
const routes = require('./routers/index');

const app = new Koa();

app.use(bodyParser());
app.use(routes);

module.exports = app;

