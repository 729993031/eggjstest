const Controller = require("egg").Controller;

class DuplicateChecking extends Controller {
  async index() {
    const { ctx } = this;
    const emailLower = ctx.query.email.toLowerCase();
    const findEmail = await ctx.model.User.findOne({
      where: {
        email: emailLower
      }
    });
    return (ctx.body = {
      status: findEmail ? "已创建" : "首次创建"
    });
  }
}

module.exports = DuplicateChecking;
