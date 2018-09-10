const Controller = require("egg").Controller;

class getRenderHtml extends Controller {
  async index() {
    await this.ctx.render("build/index.tpl");
  }
}

module.exports = getRenderHtml;
