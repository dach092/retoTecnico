"use strict";
const remoteConnection = require('../../../infrastructure/callapi');

const apiFilms = {
    getIdFilm: async (id) => {
        const url = String(`${process.env.GET_ID_FILMS}${id}`);
        const response = await remoteConnection.get(url, {
            headers: {
                'Content-Type': 'application/json;charset=utf8'
            }
        });

        return { status: response.status, data: JSON.parse(JSON.stringify(response.data)) };
    }
};

module.exports = apiFilms;