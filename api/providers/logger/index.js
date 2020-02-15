'use strict'

class Logger {

  constructor(DefaultLogger){
    this.Logger = DefaultLogger
    this.debug('Initialized service provider: Logger')
  }

  debug(msg){
    this._log('debug', msg, '  ')
  }

  info(msg){
    this._log('info', msg, '   ')
  }

  notice(msg){
    this._log('notice', msg, ' ')
  }

  warning(msg){
    this._log('warning', msg, '')
  }

  error(msg){
    this._log('error', msg, '  ')
  }

  crit(msg){
    this._log('crit', msg, '   ')
  }

  alert(msg){
    this._log('alert', msg, '  ')
  }

  emerg(msg){
    this._log('emerg', msg, '  ')
  }

  _log(level, msg, tabSize){
    this.Logger[level](`${tabSize}${new Date().toLocaleString()} - ${msg}`)
  }

}

module.exports = Logger
