const Controller = require("egg").Controller;

class SubCategory extends Controller {
  async index() {
    const { ctx, service } = this;
    /*ctx.header = {'Access-Control-Allow-Origin':' *'};*/
    return (
      (ctx.body = await service.requestCache.judge(
        `you.163.com/item/list?categoryId=${
          ctx.query.categoryId
        }&subCategoryId=${ctx.query.subCategoryId}`
      )),
      {
        headers: {
          'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language":
            "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2",
          'Connection': "keep-alive",
          'Hostm': "you.163.com",
          "Upgrade-Insecure-Requests": "1",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 UBrowser/6.2.4094.1 Safari/537.36"
        },
        maxRedirects: 0,
        dataType: "json",
        timeout: [10000, 10000]
      }
    );
  }
}

module.exports = SubCategory;
