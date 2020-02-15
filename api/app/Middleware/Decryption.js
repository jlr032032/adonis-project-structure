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
    request.body = Cryptology.decrypt(request.body.dataRequest)
    await next()
  }
}

module.exports = Decryption



