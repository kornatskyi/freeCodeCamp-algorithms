/**
 * Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
 */

function smallestCommons(arr) {
    if (arr[0] > arr[1]) {
        let x = arr[0];
        arr[0] = arr[1];
        arr[1] = x;
    }
    for (let i = 1; i < 999999; i++) {
        if ((() => {
            for (let j = arr[0]; j <= arr[1]; j++) {
                if (i % j !== 0) {
                    // console.log(i + "%" + j);
                    return true;
                }

            }
        })()) {
            // console.log(i);
        } else {

            console.log(i);
            return i;
        }
    }
}


smallestCommons([5, 1]);