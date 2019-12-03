const fs = require('fs');
const regex = /(\[[^\s].*?\])(\(http.*?\))/gm;

const mdLinks = (path) => {
  return new Promise((resolve,reject) => {
    if (!path) {
      return reject('archive not founded');
    } fs.readFile(path,'utf8',(err, data) => {
      
      if (err){
        reject('err');
      } else {
        const result = data.match(regex)
        .map(item => {
          const results = item.split('](')
          return {
            href: results[1].slice(0,-1),
            text: results[0].slice(1)
          }
        });
        resolve(result);
      }
    })
  })
}

module.exports = {
  mdLinks,
};