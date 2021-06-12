"use strict";

const objectMapper = require('object-mapper');
const { STATUS_CODE } = require('../../../../util/constants');
const APIPeople = require('../../api/PeopleApi')
const { mapper } = require('../mapper/PeopleMapper');

const GetIdPeople = async (id) => {
    const { status, data } = await APIPeople.getIdPeople(id);

    const transform = objectMapper(data, mapper.peopleId);

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

module.exports = GetIdPeople;