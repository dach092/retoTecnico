"use strict";

const objectMapper = require('object-mapper');
const { STATUS_CODE } = require('../../../../util/constants');
const APIFilm = require('../../api/FilmsApi')
const { mapper } = require('../mapper/FilmMapper');

const GetIdFilm = async (id) => {
    const { status, data } = await APIFilm.getIdFilm(id);

    const transform = objectMapper(data, mapper.filmId);

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

module.exports = GetIdFilm;