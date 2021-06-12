"use strict";

const objectMapper = require('object-mapper');
const { STATUS_CODE } = require('../../../../util/constants');
const APISpecie = require('../../api/SpeciesApi')
const { mapper } = require('../mapper/SpecieMapper');

const GetIdSpecie = async (id) => {
    const { status, data } = await APISpecie.getIdSpecie(id);

    const transform = objectMapper(data, mapper.specieId);

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

module.exports = GetIdSpecie;