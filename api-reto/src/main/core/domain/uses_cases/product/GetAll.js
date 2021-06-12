"use strict";

const objectMapper = require('object-mapper');
const { STATUS_CODE } = require('../../../../util/constants');
const DAOProduct = require('../../dao/ProductDao');
const { mapper } = require('../mapper/ProductMapper');

const GetAll = async () => {
    const { status, data } = await DAOProduct.getallProducts();

    const transform = objectMapper(data, mapper.productAll);

    if (status == STATUS_CODE.SUCCESS) {
        return {
            "success": true,
            "message": "",
            "data": transform
        };
    }

    return {
        "success": false,
        "message": "Error API",
        "data": {}
    };
};

module.exports = GetAll;
