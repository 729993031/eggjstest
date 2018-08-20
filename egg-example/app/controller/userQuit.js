const Controller = require('egg').Controller;

class UserQuit extends Controller{
     async destroy(){
        const {service,ctx} = this;
        const email = ctx.cookies.get('email');
        const token = ctx.cookies.get('jwt');
        const rules = {
            email:{type:'email', required: true, allowEmpty: false},
        };
        try {
            ctx.validate(rules,{
                email:email,
                token:token
            })
        }catch (err){
            return  ctx.body = {
                message:'退出失败',
                userQuit:false
            }
        }
        const quitResult = await service.deleteJwt.delete({email,token});
         ctx.cookies.set('jwt','');
         ctx.cookies.set('email','');
         ctx.cookies.set('login',false,{
             httpOnly:false
         });
        return ctx.body = quitResult;
    }
}

module.exports = UserQuit;