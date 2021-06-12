"use strict";

const GetIdSpecie = require('../../core/domain/uses_cases/specie/GetId');

exports.getIdSpecie = async (ctx, next) => {
    const id = ctx.params.id;
    ctx.body = await GetIdSpecie(id);
    await next();
}
