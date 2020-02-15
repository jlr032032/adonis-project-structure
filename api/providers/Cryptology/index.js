'use strict'

class Cryptology {

  constructor(CryptoJS){
    Logger.info('Initialized service provider: Cryptology')
    this.CryptoJS = CryptoJS
    this.CryptoJSAesJson = {
      stringify: (cipherParams) => {
        let j = {res: cipherParams.ciphertext.toString(CryptoJS.enc.Base64)};
        if (cipherParams.iv) j.client = cipherParams.iv.toString();
        if (cipherParams.salt) j.locale = cipherParams.salt.toString();
        return Buffer.from(JSON.stringify(j).replace(/\s/g, '')).toString('base64')
      },
      parse: (jsonStr) => {
        let j = JSON.parse(Buffer.from(jsonStr, 'base64').toString());
        let cipherParams = CryptoJS.lib.CipherParams.create({ciphertext: CryptoJS.enc.Base64.parse(j.req)});
        if (j.client) cipherParams.iv = CryptoJS.enc.Hex.parse(j.client);
        if (j.locale) cipherParams.salt = CryptoJS.enc.Hex.parse(j.locale);
        return cipherParams;
      }
    }
  }

  decrypt(encrypted){
    const _encrypted = JSON.parse(
      Buffer
        .from(encrypted, 'base64')
        .toString()
    )
    const decrypted = JSON.parse(
      this.CryptoJS.AES
        .decrypt(_encrypted.data, _encrypted.locale, { format: this.CryptoJSAesJson })
        .toString(this.CryptoJS.enc.Utf8))
    return decrypted
  }

}

module.exports = Cryptology
