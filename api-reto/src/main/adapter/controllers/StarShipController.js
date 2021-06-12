"use strict";

const GetIdStarShip = require('../../core/domain/uses_cases/starship/GetId');

exports.getIdStarShip = async (ctx, next) => {
    const id = ctx.params.id;
    ctx.body = await GetIdStarShip(id);
    await next();
}
