
const fs = require('fs');

const getConfigSync = (path) => {
  if (!fs.existsSync(path)) {
    return '';
  }
  const html = fs.readFileSync(path, 'utf8');
  return html;
}

export default getConfigSync;