const Service = require('egg').Service;

class CacheController  extends Service {
    async cacheFind(address){
        const {ctx} = this;
        const find =  await ctx.model.Cache.findOne({
            where: {address:address},
        });
        if(find){
            return find;
        }else {
            return{
                find:false
            }
        }
    }
    async createCache(address,data){
        const {ctx} = this;
        const registrationSucceed = ctx.model.Cache.create({
            address:address,
            jsonData: data,
            updated_at:Date('1992/02/13')
        });
        if(registrationSucceed){
            return{
                create:true
            }
        }else {
            return{
            create:false
            }
        }
    }
     async different(updateTime){
        const timeDifference = new Date().getTime() - new Date(updateTime).getTime();
        if(timeDifference>300000){
            return{
                update:true
            }
        }
         return{update:false}
    }
    async updateCache(address, data, newParam = {
        where: {
            address: address
        }
    }) {
        const {ctx} = this;
        await ctx.model.Cache.update({
                jsonData:data,
                updated_at:Date('1992/02/13')
            }
            , newParam);
    }
}

module.exports = CacheController;