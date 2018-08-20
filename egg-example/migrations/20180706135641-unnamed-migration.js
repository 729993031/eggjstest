'use strict';

module.exports = {
    up:  function (queryInterface, Sequelize) {
        const {UUID, STRING, DATE,} = Sequelize;

        return queryInterface.createTable("order_cart", {
            id: {
                type: UUID,
                primaryKey: true,
                allowNull: false,
            }, // 用户 ID（主键）
            username: {
                type: STRING,
                unique: true,
                allowNull: false
            }, // 用户名
            product_amount: {
                type: STRING,
                allowNull: false
            }, // 商品数量
            product_name: {
                type: STRING,
                allowNull: false
            }, // 商品名称
            product_price: {
                type: STRING,
                allowNull: false
            }, // 商品价格
            product_photo: {
                type: STRING,
                allowNull: false
            }, // 商品照片
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
