const path = require('path')
const pages = require('./pages.json')

exports.handler = async(event, context) => {
  const current = path.basename(event.headers.referer)
  let random

  do {
    random = pages[Math.floor(Math.random() * pages.length)]
  } while (random === current)

  return {
    statusCode: 302,
    headers: {
      Location: random
    }
  }
}
