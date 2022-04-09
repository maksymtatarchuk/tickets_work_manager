const path = require('path');
const fs = require('fs');

let dir = 'scripts';
let currentDir = path.join(__dirname, '/', dir);

fs.readdir(currentDir, (err, files) => {
    files.forEach(file => {
        require(currentDir + '/' + file);
        console.log('[' + dir + '] ' + file + ' - is required');
    })
})
