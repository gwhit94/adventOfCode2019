// Take 6 digit number
// Turn into array
// check if each position in array is equal to the next position
// check if each position is less than the next position
let possiblePasswords = 0;
function passwordCheck(){
    for (let i = 171309; i <= 643603; i++) {
        checker(i);
    }
    console.log(`There are ${possiblePasswords} possible passwords.`);
}
function checker(num){
    let numArray = Array.from(String(num), Number);
    // console.log(numArray);
    let incCheck = true;
    let dubCheck = false;
    for (let i = 0; i < numArray.length - 1; i++) {
        let element = numArray[i];
        let nextElement = numArray[i + 1];
        if (!incrementCheck(element, nextElement)){
            incCheck = false;
            // console.log(`${num} did not pass increment check!`);
            return false;
        };
        if (doubleCheck(element, nextElement)){
            dubCheck = true;
        };
    }
    // if(!dubCheck){
    //     console.log(`${num} does not contain doubles!`);
    // }
    if(incCheck && dubCheck){
        possiblePasswords++;
        return true;
    } else {
        return false;
    }
}
function incrementCheck(a, b){
    if (b >= a){
        return true;
    } else {
        return false;
    }
};
function doubleCheck(a, b){
    if (b === a){
        return true;
    }
}
passwordCheck();