'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Cryptology = use('Custom/Cryptology')

class Decryption {

  constructor () {
    Logger.info('Initialized middleware: Decryption')
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request }, next) {
    if (request.hasBody())
      request.body = Cryptology.decrypt(request.body.dataRequest)
    this.logMessage(request.method(), request.body)
    await next()
  }

  logMessage (method, body) {
    let logMessage = `${method.toUpperCase()} request received.`
    if (body)
      logMessage += ` Body: ${JSON.stringify(body)}`
    Logger.notice(logMessage)
  }

}

module.exports = Decryption
