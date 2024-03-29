/**
 * DESCRIPTION:
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
 */

function findUniq(arr) {
    arr = arr.sort()
    if (arr[0] === arr[1]) {
        return arr[arr.length - 1]
    } else {
        return arr[0]
    }
}

function findUniq1(arr) {
    arr.sort((a, b) => a - b);
    return arr[0] == arr[1] ? arr.pop() : arr[0]
}

function findUniq2(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}