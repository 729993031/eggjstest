'use strict';
const path = require('path');
module.exports = appInfo => {
  const config = exports = {};
  config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    };
    config.view = {
        defaultViewEngine: 'nunjucks',
        root: [
            path.join(appInfo.baseDir, 'app/public'),
            path.join(appInfo.baseDir, 'path/to/another'),
        ].join(','),
        mapping: {
            '.tpl': 'nunjucks',
        },
    };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1527081586898_9862';
  config.httpclient = {
    enableDNSCache : true,
    dnsCacheLookupInterval: 10000,
  };

  // add your config here
  config.middleware = [];

  config.security = {
      enable: false,
  };
    config.sequelize = {
        // 数据库类型
        dialect: "postgres",
        // host
        host: "localhost",
        // 端口号
        port: "5432",
        // 用户名
        username: "postgres",
        // 密码
        password: "8135472",
        // 数据库名
        database: "postgres",
    };
  config.security = {
      csrf: {
          enable:false,
          useSession: true, // 默认为 false，当设置为 true 时，将会把 csrf token 保存到 Session 中
          cookieName: 'csrfToken', // Cookie 中的字段名，默认为 csrfToken
          sessionName: 'csrfToken',
      },
  };
  return config;
};
