
const axios = require('axios');

const callApi = axios.create({
    baseURL: String(process.env.URL_SWAPI)
});

module.exports = callApi;
