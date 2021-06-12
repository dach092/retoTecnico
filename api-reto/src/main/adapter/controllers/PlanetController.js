"use strict";

const GetIdPlanet = require('../../core/domain/uses_cases/planet/GetId');

exports.getIdPlanet = async (ctx, next) => {
    const id = ctx.params.id;
    ctx.body = await GetIdPlanet(id);
    await next();
}
