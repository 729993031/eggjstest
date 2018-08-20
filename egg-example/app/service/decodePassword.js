const Service = require('egg').Service;
const Rsa = require('node-rsa');
const fs = require('fs');
class decodePassword extends Service {
     async index(password) {//私匙解密
        const privatePem = fs.readFileSync('app/public/rsa_private_key.pem').toString();
        const privateKey = new Rsa(privatePem);
        privateKey.setOptions({encryptionScheme:'pkcs1'});
        return privateKey.decrypt(password,'utf8');
    }
}

module.exports = decodePassword;