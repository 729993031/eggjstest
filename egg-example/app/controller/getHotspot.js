const Controller = require('egg').Controller;

class HostPort extends Controller {
    async index() {
        const {ctx} = this;
        const id = ctx.query.item;
        const result = await  ctx.curl('http://m.you.163.com/xhr/wapitem/rcmd.json', {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            data: {
                id: id
            },
            dataType: 'json',
            timeout: [3000, 10000],
        });
        ctx.body = result.data;
    }
}

module.exports = HostPort;