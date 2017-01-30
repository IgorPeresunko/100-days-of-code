/*
    Turing's machine.
    code by Igor Peresunko
    01.30.2017
*/

class Algo {
    constructor(tape) {
        this.tape = tape;
        this.task = tape;
        this.state = 0;
        this.pos = 0;
        this.loop = true;
        this.iterationNumber = 0;
        this.startMachine();
    }

    changeStrSymbol(str, pos,sym) {
        let k = str.split('');
        k[pos] = sym;
        return k.join('');
    }

    newState(num) {
        this.state = num;
    }

    print() {
        console.log(this.iterationNumber + ') ' + this.tape);
        ++this.iterationNumber;
    }
    end() {
        console.log('It was easy!');
        console.log('The answer is : ', this.task + '' + this.tape);
        console.log('For ordinary people: 6-4+8=10');
        this.loop = false;
    }

    startMachine() {
        while (this.loop) {
            switch (this.state) {
                case 0: {
                    if (this.tape[this.pos] == '1') {
                        ++this.pos;
                        this.newState(0);
                        break;
                    }
                    if (this.tape[this.pos] == '-') {
                        this.tape = this.changeStrSymbol(this.tape, this.pos, ' ');
                        ++this.pos;
                        this.newState(1)
                        this.print();
                        break;
                    }
                }
                case 1: {
                    if (this.tape[this.pos] == '1') {
                        this.tape = this.changeStrSymbol(this.tape, this.pos, ' ');
                        --this.pos;
                        this.newState(1);
                        break;
                    }
                    if (this.tape[this.pos] == ' ') {
                        --this.pos;
                        this.newState(2);
                        this.print();
                        break;
                    }
                }
                case 2: {
                    if (this.tape[this.pos] == '1') {
                        this.tape = this.changeStrSymbol(this.tape, this.pos, ' ');
                        ++this.pos;
                        this.newState(3);
                        this.print();
                        break;
                    }
                    if (this.tape[this.pos] == ' ') {
                        this.tape = this.changeStrSymbol(this.tape, this.pos, ' ');
                        --this.pos;
                        this.newState(2);
                        break;
                    }
                }
                case 3: {
                    if (this.tape[this.pos] == '1') {
                        this.tape = this.changeStrSymbol(this.tape, this.pos, ' ');
                        --this.pos;
                        this.newState(1);
                        break;
                    }
                    if (this.tape[this.pos] == '+') {
                        this.tape = this.changeStrSymbol(this.tape, this.pos, ' ');
                        ++this.pos;
                        this.newState(4);
                        this.print();
                        break;
                    }
                    if (this.tape[this.pos] == ' ') {
                        this.tape = this.changeStrSymbol(this.tape, this.pos, ' ');
                        ++this.pos;
                        this.newState(3);
                        break;
                    }
                }
                case 4: {
                    if (this.tape[this.pos] == '1') {
                        this.tape = this.changeStrSymbol(this.tape, this.pos, ' ');
                        --this.pos;
                        this.newState(5);
                        this.print();
                        break;
                    }
                    if (this.tape[this.pos] == ' ') {
                        
                        ++this.pos;
                        this.newState(4);
                        break;
                    }
                }
                case 5: {
                    if (this.tape[this.pos] == '1') {
                        
                        ++this.pos;
                        this.newState(6);
                        break;
                    }
                    if (this.tape[this.pos] == ' ') {
                        
                        --this.pos;
                        this.newState(5);
                        break;
                    }
                }
                case 6: {
                    if (this.tape[this.pos] == ' ') {
                        this.tape = this.changeStrSymbol(this.tape, this.pos, '1');
                        ++this.pos;
                        this.newState(4);
                        this.print();
                        break;
                    }
                    if (this.tape[this.pos] == '=') {
                        this.tape = this.changeStrSymbol(this.tape, this.pos, ' ');
                        this.end();
                        break;
                    }
                }
            }
        }
    }
}

module.exports = Algo;