"use strict";

const GetAll = require('../../core/domain/uses_cases/product/GetAll');
const Insert = require('../../core/domain/uses_cases/product/Insert');

exports.getAll = async (ctx, next) => {
    ctx.body = await GetAll();
    await next();
};

exports.insert = async (ctx, next) => {
    const body = JSON.parse(JSON.stringify(ctx.request.body));
    ctx.body = await Insert(body.name, body.category, body.cost);
    await next();
};