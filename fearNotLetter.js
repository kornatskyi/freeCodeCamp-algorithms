/*
Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. 
*/



function fearNotLetter(str) {
    let arr = "abcdefghijklmnopqrstuvwxyz";
    for (let i = arr.indexOf(str[0]); i < str.length + arr.indexOf(str[0]); i++) {

        if(arr[i] !== str[i - arr.indexOf(str[0])]) {

          return arr[i];
        }
      
    }
    return undefined;
  }
  
console.log(fearNotLetter("bcdf"));