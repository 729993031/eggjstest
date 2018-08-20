const Controller = require('egg').Controller;

class CreateUser extends Controller{
    async create(){
        const {ctx,service} = this;
        const {message,registrationCreate,token,email} = await service.createUser.create(ctx.request.body);
        const rules = {
            emailAddress:{type:'email', required: true, allowEmpty: false},
            password:{type:'string',required: true, allowEmpty: false}
        };
        try {
            ctx.validate(rules)
        }catch (err){
            return  ctx.body = {
                message:err,
                registrationCreate:false
            }
        }
        if(registrationCreate){
            ctx.cookies.set('jwt',token);
            ctx.cookies.set('email',email);
            ctx.cookies.set('login',true,{
                httpOnly:false
            })
        }
        return ctx.body = {
                message:message,
                registrationCreate:registrationCreate
        }
    }
}

module.exports = CreateUser;