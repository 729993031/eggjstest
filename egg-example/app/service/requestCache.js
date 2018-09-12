const Service = require('egg').Service;

class RequestCache extends Service{
    async judge(address,parameter = {
        dataType: 'json',
        headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
        },
        followRedirect: true,
    }) {
        const {ctx,service} = this;
        const findCache = await service.addressCache.cacheFind(address);
        if(findCache.find===false){//没找到缓存库地址就重新请求一个
            const result = await  ctx.curl(address,parameter);
            await service.addressCache.createCache(address,result.data);
            return result.data;
        }
        return findCache.jsonData;
    }
}

module.exports = RequestCache;