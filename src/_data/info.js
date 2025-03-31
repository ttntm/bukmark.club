import fs from 'fs'
import path from 'path'

function getMostRecentFile(dir) {
  const files = orderRecentFiles(dir)
  return files.length
    ? {
      total: files.length-1,
      latest: files[0]
    }
    : undefined
}

function orderRecentFiles(dir) {
  return fs.readdirSync(dir)
    .reduce((_, file) => {
      if (
        fs.lstatSync(path.join(dir, file)).isFile()
        && path.extname(file).toLowerCase() === '.md'
      ) {
        _.push({
          file,
          btime: fs.lstatSync(path.join(dir, file)).birthtime
        })
      }

      return _
    }, [])
    .sort((a, b) => b.btime.getTime() - a.btime.getTime())
}

export default function() {
  const {
    total,
    latest
  } = getMostRecentFile('./src/directory/')

  return {
    directorySize: total,
    mostRecentUpdate: latest.btime
  }
}
