const Controller = require('egg').Controller;

class CommentTags extends Controller{
    async index(){
        const ctx = this.ctx;
        const ctxQuery = ctx.query;
        const evaluateList = await  ctx.curl('http://m.you.163.com/xhr/comment/tags.json', {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            data: {
                itemId:ctxQuery.id,
            },
            dataType: 'json',
            timeout: [ 3000, 10000 ],
        });
        const result = await  ctx.curl('http://m.you.163.com/xhr/comment/itemGoodRates.json', {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            data: {
                itemId:ctxQuery.id,
            },
            dataType: 'json',
            timeout: [ 3000, 10000 ],
        });
        /*ctx.header = {'Access-Control-Allow-Origin':' *'};*/
        ctx.body = Object.assign(result.data.data,{
            evaluateList:evaluateList.data.data
        });
    }
}

module.exports = CommentTags;