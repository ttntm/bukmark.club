import dotenv from 'dotenv'
import eleventyFetch from '@11ty/eleventy-fetch'

dotenv.config()

const whitelist = [1,3,4,5,32,50]

export default async function() {
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
