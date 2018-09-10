const Controller = require("egg").Controller;

class searchResult extends Controller {
  async index() {
    const { ctx, service } = this;
    const {
      keyword,
      categoryId = 0,
      floorPrice = -1,
      upperPrice = -1,
      sortType = 0,
      descSorted = true
    } = ctx.query;
    const result = await service.requestCache.judge(
      `m.you.163.com/xhr/search/search.json?keyword=${encodeURI(
        keyword
      )}&sortType=${sortType}&descSorted=${descSorted}&categoryId=${categoryId}&matchType=1&floorPrice=${floorPrice}&upperPrice=${upperPrice}&size=40&itemId=0&stillSearch=false&searchWordSource=5&_stat_search=autoComplete`
    );
    ctx.body = {
      data:result.data
    };
  }
}

module.exports = searchResult;
