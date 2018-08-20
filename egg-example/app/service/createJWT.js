const Service = require('egg').Service;

class CreateJwt extends Service {
    async createToken(data) {
        const {app} = this;
        return app.jwt.sign({
         email:data,
     }, app.config.jwt.secret);
    }
    async verifyToken(token) {
        const {app} = this;
        return app.jwt.verify(token,app.config.jwt.secret,function (err,decoded) {
            const result = {};
            if(err){
                result.err=err
            }else {
                result.message = decoded
            }
        });
    }
}

module.exports = CreateJwt;