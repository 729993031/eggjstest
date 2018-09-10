const Controller = require("egg").Controller;

class Manufacturer extends Controller {
  async index() {
    const { ctx, service } = this;
    /*ctx.header = {'Access-Control-Allow-Origin':' *'};*/
    return (ctx.body= {
        data:await service.requestCache.judge(
            `http://m.you.163.com/item/manufacturer?tagId=${
                ctx.query.id
                }&page=1&size=100`
        )
    });
  }
}

module.exports = Manufacturer;
