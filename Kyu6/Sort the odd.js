/** 
 * DESCRIPTION:
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
 */

// Solution
/**
 * You can achieve this by first filtering out the odd numbers from the array, sorting them, and then mapping over the original array, replacing the odd numbers with the sorted ones while leaving the even numbers unchanged. Here's the function implementation:
 */

function sortArray(array) {
    // Filter out odd numbers, sort them, and store them in a variable
    const sortedOdds = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);

    // Map over the original array
    return array.map(num => {
        // If the number is odd, replace it with the next sorted odd number
        if (num % 2 !== 0) {
            return sortedOdds.shift();
        }
        // If the number is even, leave it unchanged
        return num;
    });
}

function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}

function sortArray(array) {
    var odds = [];
    //loop, if it's odd, push to odds array
    for (var i = 0; i < array.length; ++i) {
        if (array[i] % 2 !== 0) {
            odds.push(array[i]);
        }
    }
    //sort odds from smallest to largest
    odds.sort(function (a, b) {
        return a - b;
    });

    //loop through array, replace any odd values with sorted odd values
    for (var j = 0; j < array.length; ++j) {
        if (array[j] % 2 !== 0) {
            array[j] = odds.shift();
        }
    }

    return array;
}

function sortArray(array) {
    if (array.length == 0) {
        return array;
    }

    for (var i = 0; i < array.length - 1; i++) {
        for (var j = i; j < array.length; j++) {
            if ((array[i] != 0) && (array[i] % 2 != 0) &&
                (array[j] != 0) && (array[j] % 2 != 0)) {
                if (array[i] > array[j]) {
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
    }

    return array;
}