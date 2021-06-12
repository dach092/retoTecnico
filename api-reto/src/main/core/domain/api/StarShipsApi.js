"use strict";
const remoteConnection = require('../../../infrastructure/callapi');

const apiStarShip = {
    getIdStarShip: async (id) => {
        const url = String(`${process.env.GET_ID_STARTSHIPS}${id}`);

        const response = await remoteConnection.get(url, {
            headers: {
                'Content-Type': 'application/json;charset=utf8'
            }
        });

        return { status: response.status, data: JSON.parse(JSON.stringify(response.data)) };
    }
};

module.exports = apiStarShip;