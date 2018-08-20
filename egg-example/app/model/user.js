'use strict';
const db = require("../db");

module.exports = app => {
  const { STRING, INTEGER, DATE,NOW } = app.Sequelize;
    const User = db.defineModel(app,'customer_login', {
        email: {
            type: STRING,
            unique: true,
            allowNull: false,
        }, // 邮箱
        password: {
            type: STRING,
            allowNull: false
        }, // 登录密码
        jwtToken:{
            type:STRING
        }
    });
    User.sync();
  return User;
};
