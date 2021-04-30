/**
 * Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
 */

"use strict";
function convertToRoman(num) {

    function doFuncNTimes(func, n) {
        for (let i = 0; i < n; i++) {
            func();
        }
    }
    let n = 0;

    let romanString = "";
    const I = "I";
    const V = "V";
    const X = "X";
    const L = "L";
    const C = "C";
    const D = "D";
    const M = "M";

    const romanArr = [I, X, C, M, D, L, V];

    let lengthOfANumber = (num + "").length;
    for (let i = lengthOfANumber; i >= 0; i--) {
        n = Math.floor(num / (1 * Math.pow(10, i)));
        num = num % (1 * Math.pow(10, i));
        const char1 = romanArr[i];
        const char2 = romanArr[romanArr.length - i - 1];
        const char3 = romanArr[i + 1];
        if (n <= 3 && n > 0) {
            doFuncNTimes(() => {
                romanString = romanString + char1;
            }, n);
        } else if (n === 4) {
            romanString = romanString + char1 + char2;
        } else if (n === 5) {
            romanString += char2;
        } else if (n > 5 && n < 9) {
            romanString += char2;
            doFuncNTimes(() => {
                romanString = romanString + char1;
            }, n - 5);
        } else if (n === 9) {
            romanString = romanString + char1 + char3;
        } else if (n === 10) {
            romanString += char3;
        }

    }
    return romanString;
}

console.log(convertToRoman(2));
console.log(convertToRoman(29));
