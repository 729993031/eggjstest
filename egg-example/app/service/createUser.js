const Service = require('egg').Service;
const bcrypt = require('bcrypt');

// 定义加密密码计算强度
const SALT_WORK_FACTOR = 10;

class CreateUser extends Service{
    async create({password,emailAddress}) {
        const {ctx,service} = this;
        const emailLower = emailAddress.toLowerCase();
        const userFind =  await ctx.model.User.findOne({
            where: {email:emailLower},
        });
        if(!userFind){
            const decodePassword =  await service.decodePassword.index(password);
            const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
            const token = await service.createJWT.createToken(emailLower);
            const registrationSucceed = ctx.model.User.create({
                jwtToken:token,
                email: emailLower,
                password: bcrypt.hashSync(decodePassword,salt)
            });
            if (!registrationSucceed) {
                return {
                    message: '注册失败',
                    registrationCreate: false
                }
            } else {
                return {
                    token:token,
                    email: emailLower,
                    message: '注册成功',
                    registrationCreate: true
                }
            }

        }else {
            return {
                registrationCreate: false,
                message: '该邮箱已经注册'
            }
        }
    }
}

module.exports = CreateUser;