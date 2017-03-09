/*
    code by 
    Igor Peresunko, 2017
*/

const fs = require('fs');

const symbols = 'abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const dataSize = 200;

const createString = length => {
    let str = '';

    for (let i = 0; i < length; ++i) {
        str += symbols[Math.floor(Math.random() * symbols.length)] + (Math.random() > .95 ? ' ' : '');
    }

    return str;
}

const createData = size => {
    let data = '';

    for (let i = 0; i < size; ++i) {
        data += createString(Math.floor(Math.random() * 50) + 20) + '\n';
    }

    return data;
}

const createNewFile = (fileName, data) => {
    return fs.writeFileSync(fileName, data);
}

const createFileWithRandomData = fileName => {
    createNewFile(fileName, createData(dataSize));
}



module.exports = {
    createFileWithRandomData,
    createNewFile
}