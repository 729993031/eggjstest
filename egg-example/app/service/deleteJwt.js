const Service = require('egg').Service;

class deleteJwt extends Service{
    async delete({email,token}){
        const {ctx} = this;
        const userFind =  await ctx.model.User.findOne({
            where: {email:email},
        });
        if(userFind.dataValues.jwtToken!==token){
            return{
                message:'退出失败',
                userQuit:false
            }
        }else {
            return {
                message:'退出成功',
                userQuit:true
            }
        }
    }
}

module.exports = deleteJwt;