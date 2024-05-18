const path = require('path');
const fs = require('fs/promises');
var ghpages = require('gh-pages');

const publicPath = path.resolve(__dirname, 'backend/public');

async function deploymentSize() {
  try {
    const files = await fs.readdir(publicPath, { recursive: true });
    let totalSize = 0;
    for (const file of files) {
      const stats = await fs.stat(path.resolve(publicPath, file));
      totalSize += stats.isFile() ? stats.size : 0;
    }
    return totalSize;
  } catch (err) {
    console.error(err);
  }
}

// only gh-page branch work
ghpages.publish('./backend/public', async function (err) {
  console.log('Deploy finished !!');
  const size = await deploymentSize();
  console.log('Total deployment size is ', (size / 1024).toFixed(2), 'Kb');
  console.log('Open app at https://n1340t.github.io/art-of-bubble-tea/');
  if (err) {
    console.log(err);
  }
});
