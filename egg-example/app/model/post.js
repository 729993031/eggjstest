'use strict';
const db = require("../db");
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Post =  db.defineModel(app,'posts', {

    title: STRING(30),
    content: STRING(255),
    user_id: INTEGER,
  });

  Post.associate = function() {
    app.model.Post.belongsTo(app.model.User, { as: 'user', foreignKey: 'user_id' });
  };

  return Post;
};
