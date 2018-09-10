const Controller = require('egg').Controller;

class getCategoryId extends Controller{
    async index(){
        const {ctx,service} = this;
        const itemId = ctx.query.id;
        const findCache = await service.addressCache.cacheFind(`http://m.you.163.com/item/list?categoryId=${itemId}`);
        ctx.set('Cache-Control','max-age=3000');
        return ctx.body =  {
            data:findCache.jsonData.data
        };
    }
}

module.exports = getCategoryId;