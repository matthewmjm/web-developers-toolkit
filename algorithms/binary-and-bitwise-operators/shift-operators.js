'use strict'

// ---------- LEFT SHIFT OPERATOR (<<) -----------
// Write a function that takes in a decimal value and a value that represents the
// number of bit positions to shift left with. Return or print out the final base
// 10 value after the shift.

console.log('---------------------------');
console.log('leftShift tests');
console.log('---------------------------');

function leftShift(int, numOfPositionsToShift) {
    shifted = int << numOfPositionsToShift;
    intBinary = padBin(int.toString(2));
    shiftedBinary = padBin(shifted.toString(2));
    console.log('int: ', int);
    console.log('shifted: ', shifted);
    console.log('binary shifted ', numOfPositionsToShift, ' positions to the left');
    console.log('intBinary: ', intBinary);
    console.log('shiftedBinary:', shiftedBinary);
}

leftShift(1, 4);
leftShift(1, 1);
leftShift(2, 1);
leftShift(4, 1);
leftShift(3987, 4);


// How would you verify whether the above function is producing the correct value?
// I converted the numbers to thier binary and compared the given decimal with the
// shifted number.

// ---------- RIGHT SHIFT OPERATOR (>>) -----------
// Modify your existing shift function to also calculate a right-shifted value.
// Compare the values which you get from your left-shift and right-shift functions.

console.log('---------------------------');
console.log('rightShift tests');
console.log('---------------------------');

function rightShift(int, numOfPositionsToShift) {
    shifted = int >> numOfPositionsToShift;
    intBinary = padBin(int.toString(2));
    shiftedBinary = padBin(shifted.toString(2));
    console.log('int: ', int);
    console.log('shifted: ', shifted);
    console.log('binary shifted ', numOfPositionsToShift, ' positions to the right');
    console.log('intBinary: ', intBinary);
    console.log('shiftedBinary:', shiftedBinary);
}
rightShift(1, 4);
rightShift(1, 1);
rightShift(2, 1);
rightShift(4, 1);
rightShift(3987, 4);

// ---------- ZERO-FILL RIGHT SHIFT OPERATOR (>>>) ----------
// Modify your existing shift function to also calculate a zero-fill right-shifted value.

console.log('---------------------------');
console.log('zeroFillRightShift tests');
console.log('---------------------------');

function zeroFillRightShift(int, numOfPositionsToShift) {
    shifted = int >>> numOfPositionsToShift;
    intBinary = padBin(int.toString(2));
    shiftedBinary = padBin(shifted.toString(2));
    console.log('int: ', int);
    console.log('shifted: ', shifted);
    console.log('binary shifted ', numOfPositionsToShift, ' positions to the right');
    console.log('intBinary: ', intBinary);
    console.log('shiftedBinary:', shiftedBinary);
}
zeroFillRightShift(1, 4);
zeroFillRightShift(1, 1);
zeroFillRightShift(2, 1);
zeroFillRightShift(4, 1);
zeroFillRightShift(3987, 4);

// Compare the values which you get from your three different type of shift operator.
// For non-negative numbers, does the zero-fill right shift operator differ from the
// right shift operator in terms of producing the end result? Why or why not?
// Eg. 11 >>> 4 vs 11 >> 4
console.log('---------------------------');
console.log('Left-Right-ZeroFill - Shift tests - case (11,4)');
console.log('---------------------------');
leftShift(11, 4);
rightShift(11, 4);
zeroFillRightShift(11, 4);

console.log('---------------------------');
console.log('Left-Right-ZeroFill - Shift tests - case (-11,4)');
console.log('---------------------------');
leftShift(-11, 4);
rightShift(-11, 4);
zeroFillRightShift(-11, 4);


// ---------- INTERVIEW QUESTIONS -----------
console.log('---------------------------');
console.log('Interview Questions');
console.log('---------------------------');


/* Write a function which doubles an integer. */
console.log('---------------------------');
console.log('double an integer');
console.log('---------------------------');

let doubleInt = int => {
    let doubled = int << 1;
    console.log(`${int} doubled = ${doubled}`);
}
doubleInt(1);
doubleInt(4);
doubleInt(5);
doubleInt(6);



/* Write a function which quadruples an integer. */
console.log('---------------------------');
console.log('Quadruple an integer');
console.log('---------------------------');

let quadrupleInt = int => {
    let quadrupled = int << 2;
    console.log(`${int} quadrupled = ${quadrupled}`);
}
quadrupleInt(1);
quadrupleInt(4);
quadrupleInt(5);
quadrupleInt(6);



/* Write a function which divides an integer by two, rounding down. */
console.log('---------------------------');
console.log('Divide an integer by 2, rounding down');
console.log('---------------------------');

let divideIntBy2 = int => {
    let divided = int >> 1;
    console.log(`${int} divided by 2, rounded down = ${divided}`);
}
divideIntBy2(1);
divideIntBy2(4);
divideIntBy2(5);
divideIntBy2(6);



/* Write a function which calculates 2^n. */
console.log('---------------------------');
console.log('Calculate 2^n');
console.log('---------------------------');

let calcTwoToTheN = int => {
    let twoToTheN = 1 << int;
    console.log(`2 ^ ${int} = ${twoToTheN}`);
}
calcTwoToTheN(1);
calcTwoToTheN(4);
calcTwoToTheN(5);
calcTwoToTheN(6);



/* Write a function which calculates the Morton Number from two 8-bit integers. In a Morton Number, the bits of two numbers are interleaved. So if your inputs were: 15 (00001111) and 48 (00110000), your output would be 1450 (0000010110101010). */
console.log('---------------------------');
console.log('Calculate Morton Number');
console.log('---------------------------');

//original solution by Josh P.
function morton(value1, value2) {
    let value1EightBit = 0
    let value2EightBit = 0;
    let morton = 0;

    // values are shifted to the left and most significant bit
    // is taken from each of them and added to morton, which is
    // being shifted to the left as values are being inserted

    for (let i = 0; i < 8; i++) {

        // shift morton to receive the next insert from value1
        morton = morton << 1;
        // get most significant bit of value1
        value1EightBit = value1 & 0b10000000;
        // if this is a 1, add it to the tail end of morton
        if (value1EightBit > 0) {
            morton = morton | 1;
        }
        value1 = value1 << 1;

        // shift morton to receive the next insert from value2
        morton = morton << 1;
        // get most significant bit of value2
        value2EightBit = value2 & 0b10000000;
        // if this is a 1, add it to the tail end of morton
        if (value2EightBit > 0) {
            morton = morton | 1;
        }
        value2 = value2 << 1;
    }
    return morton;
}

console.log(morton(0b00001111, 0b00110000));
