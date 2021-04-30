/**
 * Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
 */

function palindrome(str) {
    const nonAlphabetical = /(_|[^A-z\d])/g;
    let string = str.replace(nonAlphabetical, "").toLowerCase().split("");
    let str1 = string.splice(string.length / 2);

    return string.every((letter, index) => {

        if (letter != str1[str1.length - index - 1]) {

            return false;
        } else {
            return true;
        }
    });
}



console.log(" should return a boolean.", palindrome("eye")); //

console.log("// should return true.", palindrome("eye"));

console.log("// should return true.", palindrome("_eye"));

console.log("// should return true.", palindrome("race car"));

console.log("// should return false.", palindrome("not a palindrome"));

console.log("// should return true.", palindrome("A man, a plan, a canal. Panama"));

console.log("// should return true.", palindrome("never odd or even"));

console.log("// should return false.", palindrome("nope"));

console.log("// should return false.", palindrome("almostomla"));

console.log("// should return true.", palindrome("My age is 0, 0 si ega ym."));

console.log("// should return false.", palindrome("1 eye for of 1 eye."));

console.log("// should return true.", palindrome("0_0 (: /-\ :) 0-0"));

console.log("// should return false.", palindrome("five|\_/|four"));