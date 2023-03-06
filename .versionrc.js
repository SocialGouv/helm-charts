/* eslint-disable node/no-unpublished-require */
const fs = require("fs-extra")

// package.json
const getDirectoriesSync = (source) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() || dirent.isSymbolicLink())
    .map((dirent) => dirent.name)

const bumpFiles = []

// charts
const getChartsRecursive = (dir, list = []) => {
  const chartList = getDirectoriesSync(dir)
  list.push(
    ...chartList.map((c) =>
      fs.realpathSync(`${dir}/${c}`).slice(__dirname.length + 1)
    )
  )
  for (const chartName of chartList) {
    const childDir = `${dir}/${chartName}/charts`
    if (fs.pathExistsSync(childDir)) {
      list.push(...getChartsRecursive(childDir))
    }
  }
  return list
}

const chartsUpdater = "dev/standard-version-chart-updater.js"

const charts = getChartsRecursive("plugins")
bumpFiles.push(
  ...charts.map((chartDir) => ({
    filename: `${chartDir}/Chart.yaml`,
    updater: chartsUpdater,
  }))
)

module.exports = {
  bumpFiles,
}
