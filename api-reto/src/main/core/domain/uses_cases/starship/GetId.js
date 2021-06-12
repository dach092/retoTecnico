"use strict";

const objectMapper = require('object-mapper');
const { STATUS_CODE } = require('../../../../util/constants');
const APIStarShip = require('../../api/StarShipsApi')
const { mapper } = require('../mapper/StarShipMapper');

const GetIdStarShip = async (id) => {
    const { status, data } = await APIStarShip.getIdStarShip(id);

    const transform = objectMapper(data, mapper.starshipId);

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

module.exports = GetIdStarShip;