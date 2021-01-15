
const fs = require('fs');

const parseJson = (text) => {
  let data = undefined;
  let error = undefined;
  try {
    data = JSON.parse(text);
  } catch(e) {
    error = e
  } finally {
    return { data, error };
  }
}

const getJsonSync = (path) => {
  if (!fs.existsSync(path)) {
    return null;
  }
  const configText = fs.readFileSync(path, 'utf8');
  const { data } = parseJson(configText);
  if(!data) {
    return null;
  }
  return data;
}

export default getJsonSync;