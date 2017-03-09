/*
    Sort Algorithms,
    code by 
    Igor Peresunko, 2017
*/

'use strict';

//modules
const files         = require('./modules/randomStringGenerator');
const readFile      = require('./modules/readFile');
const selectSort    = require('./modules/selectSort');
const insertSort    = require('./modules/insertSort');
const bubbleSort    = require('./modules/bubbleSort');
const shellSort     = require('./modules/shellSort');


//vars
const fileName = 'input.txt';

//////PROGRAM/////

//1. Create file.
files.createFileWithRandomData(fileName);

//2. Read data from the file.
const data = readFile(fileName);

//3. Select Sort.
//files.createNewFile('sortedFiles/selectSorted.txt', selectSort(data).join('\n'));

//4. Insert Sort.
//files.createNewFile('sortedFiles/insertSort.txt', insertSort(data).join('\n'));

//5. Bubble Sort.
//files.createNewFile('sortedFiles/bubbleSort.txt', bubbleSort(data).join('\n'));

//6. Shell Sort.
files.createNewFile('sortedFiles/shellSort.txt', shellSort(data).join('\n'));