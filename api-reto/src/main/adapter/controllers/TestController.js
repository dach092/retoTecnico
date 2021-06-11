'use strict';

exports.testhola = async (ctx, next) => {
    ctx.body = { 'msj': 'Hola' };
    await next();
}