'use strict';

let str = 'abcasdcasdcacascasbasbasbbcababcasdcasdcacascasbasbasbbcab';

const rules = [['ab', 'b'], ['k', ''], ['s', 'ab'], ['b', 'k'], ['c', 'k'], ['da', '']];
let iterations = 0;
let exit = false;

const start = Date.now();
while (!exit) {
    let checkStr = str;

    here: for (let i = 0; i < rules.length; i++) {

        if (str.indexOf(rules[i][0]) >= 0) {
            str = str.replace(rules[i][0], rules[i][1]);
            console.log(rules[i][0], str);
            break here; 
        } 

    }
    iterations++;

    exit = str === checkStr || iterations > 1000 ? true : false; 

}
const end = Date.now();

console.log(`Iterations: ${iterations};
time: ${end - start} ms;
string: ${str};`);

