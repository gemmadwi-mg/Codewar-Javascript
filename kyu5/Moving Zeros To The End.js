/** 
 * DESCRIPTION:
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

 */

/** 
 * 
You can achieve this by using a two-pointer approach where one pointer scans the array for non-zero elements, and another pointer keeps track of where the next non-zero element should be placed. Here's how you can implement this algorithm:
 */

function moveZerosToEnd(arr) {
    // Initialize a pointer to keep track of where to place non-zero elements
    let nonZeroIndex = 0;

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // If the current element is non-zero
        if (arr[i] !== 0) {
            // Move the non-zero element to the next available non-zero position
            arr[nonZeroIndex] = arr[i];

            // If there was a non-zero element at this position already, it's been moved,
            // so we need to replace it with zero
            if (i !== nonZeroIndex) {
                arr[i] = 0;
            }

            // Move the non-zero index pointer to the next position
            nonZeroIndex++;
        }
    }

    return arr;
}


var moveZeros = function (arr) {
    return arr.filter(function (x) { return x !== 0 }).concat(arr.filter(function (x) { return x === 0; }));
}

var moveZeros = function (arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
        }
    }
    return arr;
}

function moveZeros(arr) {
    return arr.sort((a, b) => b === 0 ? -1 : 0);
}

var moveZeros = function (arr) {
    return arr
        .filter((val) => val !== 0)
        .concat(arr.filter((val) => val === 0));
}