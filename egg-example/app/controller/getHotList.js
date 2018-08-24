const Controller = require('egg').Controller;

class getHotList extends Controller{
    async index(){
        const {ctx, service} = this;
        /*ctx.header = {'Access-Control-Allow-Origin':' *'};*/
        return ctx.body = await service.requestCache.judge('http://m.you.163.com/xhr/topic/getHotList.json', {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            data: {
                page: ctx.query.page,
                size: ctx.query.size
            },
            dataType: 'json',
            timeout: [ 3000, 10000 ],
        });
        /*ctx.header = {'Access-Control-Allow-Origin':' *'};*/
    }
}

module.exports = getHotList;