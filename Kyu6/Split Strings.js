/**
 Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
 */

function solution(str) {
    var i = 0;
    var result = new Array();

    if (str.length % 2 !== 0) {
        str = str + '_';
    }

    while (i < str.length) {
        result.push(str[i] + str[i + 1]);
        i += 2;
    }

    return result;
}

function solution2(str) {
    arr = [];
    for (var i = 0; i < str.length; i += 2) {
        second = str[i + 1] || '_';
        arr.push(str[i] + second);
    }
    return arr;
}

/** 
 * You can achieve this by iterating over the string and creating pairs of two characters. If the string has an odd length, you can append an underscore to the last pair. Here's the function implementation:
 */

function splitStringIntoPairs(str) {
    const pairs = [];

    // Iterate over the string with step 2
    for (let i = 0; i < str.length; i += 2) {
        // Get a pair of characters
        let pair = str.slice(i, i + 2);

        // If the pair has only one character (i.e., the last pair)
        // append an underscore to it
        if (pair.length === 1) {
            pair += '_';
        }

        // Push the pair into the result array
        pairs.push(pair);
    }

    return pairs;
}