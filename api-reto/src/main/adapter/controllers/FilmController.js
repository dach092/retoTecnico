"use strict";

const GetIdFilm = require('../../core/domain/uses_cases/film/GetId');

exports.getIdFilm = async (ctx, next) => {
    const id = ctx.params.id;
    ctx.body = await GetIdFilm(id);
    await next();
}
