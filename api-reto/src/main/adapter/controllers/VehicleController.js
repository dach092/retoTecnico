"use strict";

const GetIdVehicle = require('../../core/domain/uses_cases/vehicle/GetId');

exports.getIdVehicle = async (ctx, next) => {
    const id = ctx.params.id;
    ctx.body = await GetIdVehicle(id);
    await next();
}
