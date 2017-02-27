'use strict';

let tape = '0010110110101',
    position = 0,
    stack = null;    

const takeNumber = (tape, position) => tape[position];

const clear = (tape, position) => tape.slice(++position);

const putFromStack = (tape, position, stack) => tape.slice(0, position) + stack + tape.slice(++position);

const moveTapeToRight = position => ++position;

const moveTapeToLeft = position => --position;

const program = (tape, position, stack) => {

    while (position != 0) {
        position = moveTapeToLeft(position);
    }

    stack = takeNumber(tape, position);   

    tape = clear(tape, position);
    position = moveTapeToLeft(position);

    do {
        position = moveTapeToRight(position);
    } while (tape[position] != 0 && tape[position] != undefined);

    tape = putFromStack(tape, position, stack);

    do {
        position = moveTapeToRight(position);
    } while (tape[position] != 0 && tape[position] != undefined);
    console.log(tape);
    if (tape[position] == 0) tape = program(tape, position, stack);

    return tape;
}

console.log(`Task: ${tape}`);
const newTape = program(tape, position, stack);
console.log(`Answer: ${newTape}`);

