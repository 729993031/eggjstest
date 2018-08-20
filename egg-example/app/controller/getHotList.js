const Controller = require('egg').Controller;

class getHotList extends Controller{
    async index(){
        const ctx = this.ctx;
        const ctxQuery = ctx.query;
        const result = await  ctx.curl('http://m.you.163.com/xhr/topic/getHotList.json', {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            data: {
                page:ctxQuery.page,
                size:ctxQuery.size
            },
            dataType: 'json',
            timeout: [ 3000, 10000 ],
        });
        /*ctx.header = {'Access-Control-Allow-Origin':' *'};*/
        ctx.body = result.data;
    }
}

module.exports = getHotList;