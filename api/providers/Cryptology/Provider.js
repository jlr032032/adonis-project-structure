const { ServiceProvider } = require('@adonisjs/fold')

class CriptologyProvider extends ServiceProvider{
  register(){
    this.app.singleton('Custom/Cryptology', () => {
      const CryptoJS = this.app.use('crypto-js')
      return new (require('.'))(CryptoJS)
    })
  }
}

module.exports = CriptologyProvider
