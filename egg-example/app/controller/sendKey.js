const Controller = require('egg').Controller;
const fs = require('fs');

class GetPublicKey extends Controller{
    async index(){
        const ctx = this.ctx;
        /*ctx.header = {'Access-Control-Allow-Origin':' *'};*/
        ctx.body =  JSON.stringify({
            key:await ctx.service.sendPublicKey.getKey()
        });
    }
}

module.exports = GetPublicKey;