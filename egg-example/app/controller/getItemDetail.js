const Controller = require('egg').Controller;

class getItemDetail extends Controller{
    async index(){
        const {ctx,service} = this;
        const itemId = ctx.query.id;
        return ctx.body = {
            data:await service.requestCache.judge(`http://m.you.163.com/item/detail?id=${itemId}`)
        };
    }
}

module.exports = getItemDetail;