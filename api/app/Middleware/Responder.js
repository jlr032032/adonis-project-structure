'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Responder {

  constructor () {
    Logger.info('Initialized middleware: Responder')
  }

  /**
   * @param {object} ctx
   * @param {Response} ctx.response
   * @param {Function} next
   */
  async handle ({ response, antl }, next) {
    try {
      await next()
      this.send(response, response.data.httpStatus, response.data.data)
    } catch (error) {
      if(response.data)
        this.send(response, response.data.httpStatus, response.data.data)
      else {
        Logger.error(error.stack)
        this.send(response, 500, { message: antl.formatMessage('general.GENERAL_ERROR') })
      }
    }
  }

  send (response, status, data) {
    response.status(status)
    if (data)
      response.json(data)
    this.logMessage(status, data)
  }

  logMessage (status, data) {
    let logMessage = `Sending response with status ${status}.`
    if (data)
      logMessage += ` Body: ${JSON.stringify(data)}`
    Logger.notice(logMessage)
  }

}

module.exports = Responder


