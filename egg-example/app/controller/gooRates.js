const Controller = require("egg").Controller;

class gooRates extends Controller {
  async index() {
    const { ctx,service } = this;
    const itemId = ctx.query.id;
    const GoodRates = await service.requestCache.judge(
      `http://m.you.163.com/xhr/comment/itemGoodRates.json?itemId=${itemId}`,
      {
        // 必须指定 method
        method: "POST",
        // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
        // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
        dataType: "json"
      }
    );
    ctx.body ={
        data: GoodRates.data
    };
  }
}

module.exports = gooRates;
