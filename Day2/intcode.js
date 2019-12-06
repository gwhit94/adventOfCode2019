//An Intcode program is a list of integers separated by commas (like 1,0,0,3,99). 
//To run one, start by looking at the first integer (called position 0). 
//Here, you will find an opcode - either 1, 2, or 99. 
//The opcode indicates what to do; 
////for example, 99 means that the program is finished and should immediately halt. 
//Encountering an unknown opcode means something went wrong.

// Program input [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,9,23,1,23,13,27,1,10,27,31,2,31,13,35,1,10,35,39,2,9,39,43,2,43,9,47,1,6,47,51,1,10,51,55,2,55,13,59,1,59,10,63,2,63,13,67,2,67,9,71,1,6,71,75,2,75,9,79,1,79,5,83,2,83,13,87,1,9,87,91,1,13,91,95,1,2,95,99,1,99,6,0,99,2,14,0,0]
var intcode = [];
let i = 0;
var opcode = 0;
let x;
let y;
let z;
let a;
// opcode = 1 --> adds together numbers read from two positions and stores the result in a third position.
// The three integers immediately after the opcode tell you these three positions
// - the first two indicate the positions from which you should read the input values,
// and the third indicates the position at which the output should be stored.
function computer(){
    opcode = intcode[i];
    switch (opcode) {
        case 1:
            // adds value at position 1 with value at position 2 
            // and places it at value of position 3
            x = intcode[i + 1];
            y = intcode[i + 2];
            z = intcode[i + 3];
            a = intcode[x] + intcode[y];
            intcode[z] = a;
            i += 4;
            computer(intcode);
            break;
        case 2:
            // multiplies value at position 1 with value at position 2 
            // and places it at value of position 3
            x = intcode[i + 1];
            y = intcode[i + 2];
            z = intcode[i + 3];
            a = intcode[x] * intcode[y];
            intcode[z] = a;
            i += 4;
            computer(intcode);
            break;
        case 99:
            i = 0;
            console.log(intcode);
            break;
            
        default:
            console.log(intcode);
            break;
    }
};