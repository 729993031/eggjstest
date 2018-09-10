const Controller = require("egg").Controller;

class getHotList extends Controller {
  async index() {
    const {ctx,service} = this;
    const ctxQuery = ctx.query;
    const result = await service.requestCache.judge(
        `http://m.you.163.com/xhr/topic/getHotList.json?page=${ctxQuery.page}&size=${ctxQuery.size}`,
        {
            // 必须指定 method
            method: "POST",
            // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
            dataType: "json"
        }
    )
    ctx.body = {
        data:result.data
    };
  }
}

module.exports = getHotList;
