const Service = require('egg').Service;
const fs = require('fs');

class SendKey extends Service{
    async getKey(){
        return fs.readFileSync('app/public/rsa_private_key.pem').toString();
    }
}

module.exports = SendKey;