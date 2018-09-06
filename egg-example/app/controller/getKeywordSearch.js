const Controller = require("egg").Controller;

class getKeywordSearch extends Controller {
  async index() {
    const { ctx, service } = this;
    const targetText =encodeURI(ctx.query.keywordPrefix);
    const findCache = await await service.requestCache.judge(
      `http://m.you.163.com/xhr/search/searchAutoComplete.json?keywordPrefix=${targetText}`,
      {
        dataType: "json",
        followRedirect: true,
        method: "POST"
      }
    );
    return (ctx.body = {
      data: findCache.data
    });
  }
}

module.exports = getKeywordSearch;
