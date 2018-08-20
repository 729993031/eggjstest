'use strict';

// had enabled by egg
// exports.static = true;
exports.validate = {
    enable: true,
    package: 'egg-validate',
};
exports.cors = {
    enable: true,
    package: 'egg-cors',
};
exports.sequelize = {
    enable: true,
    package: 'egg-sequelize',
};
exports.jwt = {
    enable: true,
    package: "egg-jwt"
};
exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks',
};
exports.security = {
    csrf: {
        enable:false,
        ignore: 'http://localhost:3000/register',
        useSession: true, // 默认为 false，当设置为 true 时，将会把 csrf token 保存到 Session 中
        cookieName: 'csrfToken', // Cookie 中的字段名，默认为 csrfToken
        sessionName: 'csrfToken',
    },
};



