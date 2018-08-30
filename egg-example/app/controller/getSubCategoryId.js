const Controller = require("egg").Controller;

class SubCategory extends Controller {
  async index() {
    const { ctx, service } = this;
    /*ctx.header = {'Access-Control-Allow-Origin':' *'};*/
    return (ctx.body = await service.requestCache.judge(
      `http://m.you.163.com/item/list?categoryId=${
        ctx.query.categoryId
      }&subCategoryId=${ctx.query.subCategoryId}`
    ));
  }
}

module.exports = SubCategory;
