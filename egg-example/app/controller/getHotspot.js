const Controller = require("egg").Controller;

class HostPort extends Controller {
  async index() {
    const { ctx,service } = this;
    const id = ctx.query.item;
    const result = await service.requestCache.judge(
      `http://m.you.163.com/xhr/wapitem/rcmd.json?id=${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        },
        dataType: "json",
        timeout: [3000, 10000]
      }
    );
    ctx.body = {
        data:result.data
    };
  }
}

module.exports = HostPort;
