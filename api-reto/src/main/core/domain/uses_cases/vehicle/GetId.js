"use strict";

const objectMapper = require('object-mapper');
const { STATUS_CODE } = require('../../../../util/constants');
const APIVehicle = require('../../api/VehiclesApi')
const { mapper } = require('../mapper/VehicleMapper');

const GetIdVehicle = async (id) => {
    const { status, data } = await APIVehicle.getIdVehicle(id);

    const transform = objectMapper(data, mapper.vehicleId);

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

module.exports = GetIdVehicle;