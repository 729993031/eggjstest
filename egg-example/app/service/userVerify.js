const Service = require('egg').Service;
const bcrypt = require('bcrypt');

class UserVerify extends Service {
    async verify ({emailLower,password}){
        const {ctx,service} = this;
        const userFind =  await ctx.model.User.findOne({
            where: {email:emailLower},
        });
        if(userFind){
            const {dataValues} = userFind;
            const decodePassword =  await service.decodePassword.index(password);
            const passwordMatching = bcrypt.compareSync(decodePassword, dataValues.password);
            if(!passwordMatching){
                return{
                    message: '密码不对',
                    userLogin: false
                }
            }else {
                const token = await service.createJWT.createToken(emailLower);
                await ctx.model.User.update({
                    jwtToken:token,
                    }
                    , {
                    where: {
                        email: emailLower
                    }
                });
                return {
                    message: '登录成功',
                    userToken:token,
                    userLogin: true
                }
            }
        }else {
            return {
                message: '帐号不存在',
                userLogin: false
            }
        }
    }
}

module.exports = UserVerify;