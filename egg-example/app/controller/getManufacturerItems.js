const Controller = require("egg").Controller;

class ManufacturerItems extends Controller {
  async index() {
    const { ctx, service } = this;
    const {
      tagId,
      categoryId,
      descSorted,
      floorPrice,
      page=1,
      size=100,
      sortType,
      upperPrice
    } = ctx.query;
    return (ctx.body = await service.addressCache.cacheFind(
      `http://m.you.163.com/xhr/manufacturer/items.json?tagId=${tagId}&page=${page}&size=${size}&sortType=${sortType}&descSorted=${descSorted}&floorPrice=${floorPrice}&upperPrice=${upperPrice}&categoryId=${categoryId}`
    ));
  }
}

module.exports = ManufacturerItems;
