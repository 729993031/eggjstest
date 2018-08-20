'use strict';
const db = require("../db");

module.exports = app => {
    const { STRING,JSON,DATE } = app.Sequelize;
    const Cache = db.defineModel(app,'requestCaches', {
        jsonData: {
            type: JSON,
            unique: true,
            allowNull: false
        }, // 请求地址
        address: {
            type: STRING,
            unique: true,
            allowNull: false,
        }, // 请求数据
        updated_at:{
            type:DATE,
            defaultValue:() =>  Date('1992/02/13')
        }
    });
    Cache.sync();
    return Cache;
};
