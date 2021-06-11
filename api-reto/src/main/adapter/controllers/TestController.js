'use strict';

exports.testhola = async (ctx, next) => {
    ctx.body = 'Hola';
    await next();
}