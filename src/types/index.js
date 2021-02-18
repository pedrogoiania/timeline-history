const fs = require('fs');

function typeFilesContentByDirectory(dir) {
  return fs.readdirSync(dir)
    .filter((file) => file.endsWith('.graphql'))
    .map((file) => `${dir}/${file}`)
    .map((file) => fs.readFileSync(file, { encoding: 'utf-8' }));
}

const graphqlTypeFolders = [
  __dirname,
];

const files = graphqlTypeFolders.map(typeFilesContentByDirectory);
const flattenFiles = [].concat([], ...files);

module.exports = flattenFiles;
