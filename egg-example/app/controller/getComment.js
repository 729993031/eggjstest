const Controller = require('egg').Controller;

class getComment extends Controller{
    async index(){
        const ctx = this.ctx;
        const ctxQuery = ctx.query;
        const result = await  ctx.curl('http://m.you.163.com/xhr/comment/listByItemByTag.json', {
            method: "GET",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            data: {
                tag:ctxQuery.tag,
                itemId:ctxQuery.itemId,
                page:ctxQuery.page
            },
            dataType: 'json',
            timeout: [ 3000, 10000 ],
        });
        /*ctx.header = {'Access-Control-Allow-Origin':' *'};*/
        ctx.body = result.data;
    }
}

module.exports = getComment;