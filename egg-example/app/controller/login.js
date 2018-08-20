const Controller = require('egg').Controller;

class UserLogin extends Controller {

        async create(){
        const {ctx,service} = this;
        const rules = {
            emailAddress:{type:'email', required: true, allowEmpty: false},
            password:{type:'string',required: true, allowEmpty: false}
        };
        try {
            ctx.validate(rules)
        }catch (err){
            return  ctx.body = {
                message:'帐号格式错误',
                userLogin:false
            }
        }
        const {emailAddress,password} = ctx.request.body;
        const emailLower = emailAddress.toLowerCase();
        const {userToken,userLogin,message} = await service.userVerify.verify({emailLower,password});
       if(!userLogin){
           return  ctx.body = {
               message:message,
               userLogin:userLogin
           }
       }else {
           ctx.cookies.set('jwt',userToken);
           ctx.cookies.set('email',emailAddress);
           ctx.cookies.set('login',true,{
               httpOnly:false
           });
           return  ctx.body = {
               message:message,
               userLogin:userLogin
           }
       }
    }
}

module.exports = UserLogin;