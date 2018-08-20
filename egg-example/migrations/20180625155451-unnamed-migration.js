'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        const { UUID, STRING, INTEGER, DATE, BOOLEAN } = Sequelize;

        await queryInterface.createTable("users", {
            id: {
                type: UUID,
                primaryKey: true,
                allowNull: false,
                comment:'test'
            }, // 用户 ID（主键）

            username: {
                type: STRING,
                unique: true,
                allowNull: false
            }, // 用户名
            email: {
                type: STRING,
                unique: true,
                allowNull: false
            }, // 邮箱
            password: {
                type: STRING,
                allowNull: false
            }, // 登录密码
            createdAt: DATE, // 用户创建时间
            updatedAt: DATE, // 用户信息更新时间
            lastSignInAt: DATE // 上次登录时间
        });
    },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
