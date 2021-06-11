"use strict";
const Koa = require('koa');
const routes = require('./routers/index');

const app = new Koa();

app.use(routes);

// var App = (() => {
//     function App() {
//         this.App = new Application.default();
//         this.loadRoutes();
//     }

//     App.prototype.createHandleRequest = () => {
//         return this.App.callback();
//     };
//     App.prototype.loadRoutes = () => {
//         this.App.use(Routers);
//     };
// })();

module.exports = app;

