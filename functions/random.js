const path = require('path')
const pages = require('./pages.json')

exports.handler = async(event, context) => {
  const random = pages[Math.floor(Math.random() * pages.length)]

  return {
    statusCode: 302,
    headers: {
      Location: random
    }
  }
}
