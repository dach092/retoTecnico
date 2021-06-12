"use strict";

const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const dbsource = "appbase.sqlite";
const filescript = path.join(__dirname, "/sql/createtable.sql");

const db = new sqlite3.Database(dbsource, (err) => {
    if (err) {
        throw err;
    } else {
        const query = fs.readFileSync(filescript, 'utf-8');
        db.run(query.toString(), (err) => {
            if (err) {
                throw err;
            }
        });
    }
});

module.exports = db;

