const fs = require('fs');
const path = require('path');

function displayDirectoriesAndFiles(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    files.forEach(file => {
      const filePath = path.join(directoryPath, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error('Error getting file stats:', err);
          return;
        }

        if (stats.isDirectory()) {
          console.log('Directory:', file);
        } else {
          console.log('File:', file);
        }
      });
    });
  });
}


const directoryPath = './BEE2';
console.log(directoryPath);
displayDirectoriesAndFiles(directoryPath);
