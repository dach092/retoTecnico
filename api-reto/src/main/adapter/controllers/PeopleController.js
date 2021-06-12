"use strict";

const GetIdPeople = require('../../core/domain/uses_cases/people/GetId');

exports.getIdPeople = async (ctx, next) => {
    const id = ctx.params.id;
    ctx.body = await GetIdPeople(id);
    await next();
}
