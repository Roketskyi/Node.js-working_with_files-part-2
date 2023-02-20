const fs = require('fs');

function appendProduct(filePath, fileContent) {
    fs.appendFileSync(filePath, fileContent + '\r\n');
    // console.log(`Product "${fileContent}" add to file "${filePath}"`);
};

function findById(id, filePath) {
    let data = fs.readFileSync(filePath, 'utf8');

    data = data.split('\r\n');
    
    for (let i = 0; i < data.length; i++) {
        if (id == data[i].split(',')[0]) {
            return data[i];
        }
    }
};

// appendProduct('file.csv', '5, iphone, 3000, red');

// const el = findById(5, 'file.csv');
// console.log (el)