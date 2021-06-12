"use strict";

const DAOProduct = require('../../dao/ProductDao');
const { STATUS_CODE } = require('../../../../util/constants');

const Insert = async (name, category, cost) => {

    const fechaactual = `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`;

    const created = fechaactual;
    const edited = fechaactual;

    const { status, msj } = await DAOProduct.insertProducts(name, category, cost, created, edited);

    if (status == STATUS_CODE.SUCCESS) {
        return {
            "success": true,
            "message": msj,
            "data": {}
        };
    }

    return {
        "success": false,
        "message": "Error API",
        "data": {}
    };
};

module.exports = Insert;