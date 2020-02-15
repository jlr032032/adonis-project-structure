'use strict'

const { hooks } = require('@adonisjs/ignitor')

hooks.after.httpServer(() => {
  const Response = use('Adonis/Src/Response')
  Response.macro('setData', function(httpStatus, data) {
    this.data = { httpStatus, data }
  })
})
