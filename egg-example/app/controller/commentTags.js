const Controller = require("egg").Controller;

class CommentTags extends Controller {
  async index() {
    const {ctx,service} = this;
    const ctxQuery = ctx.query;
    const evaluateList = await service.requestCache.judge(
      `http://m.you.163.com/xhr/comment/tags.json?itemId=${ctxQuery.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        },
        dataType: "json",
        timeout: [3000, 10000]
      }
    );

    const result = await service.requestCache.judge(
      `http://m.you.163.com/xhr/comment/itemGoodRates.json?itemId=${ctxQuery.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        },
        dataType: "json",
        timeout: [3000, 10000]
      }
    );
    /*ctx.header = {'Access-Control-Allow-Origin':' *'};*/
    ctx.body = Object.assign(result.data, {
      evaluateList: evaluateList.data
    });
  }
}

module.exports = CommentTags;
