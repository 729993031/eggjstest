const Controller = require('egg').Controller;

class getRenderHtml extends Controller {
    async index() {
        console.log('123')
        await this.ctx.render('build/index.tpl');
    }
}

module.exports = getRenderHtml;