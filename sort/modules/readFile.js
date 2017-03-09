/*
    code by 
    Igor Peresunko, 2017
*/

const fs = require('fs');

const read = fileName => {
    let input = '';

    try {
        input = fs.readFileSync(fileName).toString().split('\n');
    } catch (e) {
        console.log(`There is a problem with the '${fileName}'`);
    }
    
    return input;
}

module.exports = read;