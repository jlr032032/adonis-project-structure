const { ServiceProvider } = require('@adonisjs/fold')

class LoggerProvider extends ServiceProvider{
  register(){
    this.app.singleton('Custom/Logger', () => {
      const DefaultLogger = this.app.use('Logger')
      return new (require('.'))(DefaultLogger)
    })
  }
}

module.exports = LoggerProvider
