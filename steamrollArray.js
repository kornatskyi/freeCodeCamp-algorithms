/*
Steamroller
Flatten a nested array. You must account for varying levels of nesting.
*/
let finalArray = [];
function steamrollArray(arr) {

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      steamrollArray(arr[i]);
    } else {
      finalArray.push(arr[i])
    }
  }

  return finalArray;
}


// console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
