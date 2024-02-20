const fs = require('fs')
const path = require('path')

function getMostRecentFile(dir) {
  const files = orderRecentFiles(dir)
  return files.length
    ? files[0]
    : undefined
}

function orderRecentFiles(dir) {
  return fs.readdirSync(dir)
    .filter((file) => fs.lstatSync(path.join(dir, file)).isFile())
    .map((file) => ({
      file,
      btime: fs.lstatSync(path.join(dir, file)).birthtime
    }))
    .sort((a, b) => b.btime.getTime() - a.btime.getTime())
}

function main() {
  const {
    file,
    btime
  } = getMostRecentFile('./src/directory/')

  fs.writeFileSync('./src/_data/info.json', JSON.stringify({
    mostRecentUpdate: btime
  }))
}

main()
