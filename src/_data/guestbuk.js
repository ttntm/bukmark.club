const config = require('dotenv').config()
const eleventyFetch = require('@11ty/eleventy-fetch')

const whitelist = []

module.exports = async function() {
  let reqUrl = `https://api.netlify.com/api/v1/forms/${process.env.NTL_GUESTBUK}/submissions`
  let response = await eleventyFetch(reqUrl, {
    directory: '.cache',
    duration: '1d',
    type: 'json',
    fetchOptions: {
      headers: {
        Authorization: `Bearer ${process.env.NTL_TOKEN}`
      }
    }
  })

  if (response && response?.length > 0) {
    const data = response
      .filter((entry) => whitelist.includes(entry.number))
      .map((entry) => {
        return {
          ...entry.data,
          created: entry.created_at
        }
      })

    return data.length > 0
      ? data
      : []
  } else {
    return []
  }
}
