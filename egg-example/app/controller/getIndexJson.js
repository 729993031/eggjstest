const Controller = require('egg').Controller;

class GetIndexJson extends Controller{
    async index() {
        const {ctx, service} = this;
        /*ctx.header = {'Access-Control-Allow-Origin':' *'};*/
        return ctx.body = await service.requestCache.judge('http://m.you.163.com/?_stat_click_count=backwapbtn');
    }
}

module.exports = GetIndexJson;