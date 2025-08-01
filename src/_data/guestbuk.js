import dotenv from 'dotenv'
import eleventyFetch from '@11ty/eleventy-fetch'

dotenv.config()

const whitelist = [1,3,4,5,32,50,61,62,65,66,67,68,71,129,148,149,160,161]

export default async function() {
  if (!process.env.NTL_GUESTBUK || !process.env.NTL_TOKEN) {
    return []
  }

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
      .reduce((_, entry) => {
        if (whitelist.includes(entry.number)) {
          _.push({
            ...entry.data,
            created: entry.created_at
          })
        }

        return _
      }, [])

    return data.length > 0
      ? data
      : []
  } else {
    return []
  }
}
