const Controller = require("egg").Controller;

class getHotSearch extends Controller {
    async index() {
        const { ctx, service } = this;
        const findCache = await service.requestCache.judge(
            `http://m.you.163.com/xhr/search/init.json`,   {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                },
                dataType: "json",
                timeout: [3000, 10000]
            }
        );
        return (ctx.body = {
            data: findCache.data
        });
    }
}

module.exports = getHotSearch;
