"use strict";

const objectMapper = require('object-mapper');
const { STATUS_CODE } = require('../../../../util/constants');
const APIPlanet = require('../../api/PlanetsApi')
const { mapper } = require('../mapper/PlanetMapper');

const GetIdPlanet = async (id) => {
    const { status, data } = await APIPlanet.getIdPlanet(id);

    const transform = objectMapper(data, mapper.planetId);

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

module.exports = GetIdPlanet;