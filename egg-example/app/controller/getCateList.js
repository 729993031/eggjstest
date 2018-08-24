const Controller = require('egg').Controller;

class GetCateList extends Controller{
    async index(){
        const {ctx, service} = this;
        /*ctx.header = {'Access-Control-Allow-Origin':' *'};*/
        const result=await service.requestCache.judge('http://m.you.163.com/item/cateList?categoryId=1005000',{
            headers:{
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
                'Connection': 'keep-alive',
                'Upgrade-Insecure-Requests': '1',
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
            },
            maxRedirects: 0,
            dataType: 'json',
            timeout: [ 10000, 10000 ],
        });

        /*
        因为送过来的数据有的列表和旧的列表
        ，但是新的列表中之前的列表没有子项但有横幅的URL
        ，而旧的列表有子项而没有横幅。
        所以先遍历新的列表中的已含有的旧的
        列表的图片到旧列表中然后取新添加的列表项和旧的列表项相加
         */
        const gapLength = result.data.categoryL1List.length-result.global.cateList.length;
        const oldList = result.global.cateList.slice();
        const newList = result.data.categoryL1List.slice(0,gapLength);
        oldList.map((value, index) =>
            value.wapBannerUrl = result.data.categoryL1List[index+gapLength].wapBannerUrl
        );
        ctx.set('Cache-Control','max-age=3000');
        return ctx.body = {
            data:newList.concat(oldList)
        };
    }
}

module.exports = GetCateList;