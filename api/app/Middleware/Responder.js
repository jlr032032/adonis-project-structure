'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Responder {
  /**
   * @param {object} ctx
   * @param {Response} ctx.response
   * @param {Function} next
   */
  async handle ({ response, antl }, next) {
    try {
      await next()
      send(response, response.data.httpStatus, response.data.data)
    } catch (error) {
      if(response.data)
        send(response, response.data.httpStatus, response.data.data)
      else {
        Logger.error(error.stack)
        send(response, 500, { message: antl.formatMessage('general.GENERAL_ERROR') })
      }
    }
  }
}

module.exports = Responder

function send(response, status, data){
  response.status(status)
  if (data)
    response.json(data)
}
