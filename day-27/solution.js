// The Mission: The Letter "K"

const csv = require('csv-parser');
const fs = require('fs');
const file = 'K.csv';

const luckyK = (word) => {
  let fooBar;
  fs.createReadStream(file)
    .pipe(csv({ headers: false }))
    .on('data', (data) => {
      if (data.hasOwnProperty('0')) {
        const dw = data['0'].substr(0, data['0'].indexOf('(')).toLowerCase();
        if (word.toLowerCase().trim() === dw.trim()) {
          fooBar = data;
        }
      }
    })
    .on('end', () => {
      if (fooBar) {
        console.log(fooBar['0'].substr(fooBar['0'].indexOf(')') + 1))
      } else {
        console.log("Word not found");
      }
    });
}

/*
Kaffir
Knock-knee
Kyrie eleison
*/

luckyK('Kaffir');