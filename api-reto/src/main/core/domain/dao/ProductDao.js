"use strict";

const db = require('../../../database/initsqlite');
const { STATUS_CODE } = require('../../../util/constants');

const productsDao = {
    getallProducts: async () => {
        return new Promise((resolve, reject) => {
            db.all('select * from products', (err, rows) => {
                if (err) { return reject({ status: STATUS_CODE.NO_CONTENT, data: [] }); }
                resolve({ status: STATUS_CODE.SUCCESS, data: JSON.parse(JSON.stringify(rows)) });
            });
        });
    },
    insertProducts: async (name, category, cost, created, edited) => {
        const params = [name, category, cost, created, edited];
        return new Promise((resolve, reject) => {
            db.run('insert into products (product_name,product_category,product_cost,product_created,product_edited) values (?,?,?,?,?)',
                params, (err, result) => {
                    if (err) { return reject({ status: STATUS_CODE.NO_CONTENT, msj: "" }); }
                    resolve({ status: STATUS_CODE.SUCCESS, msj: "Producto Registrado" })
                });
        });
    }
};

module.exports = productsDao;