/** 
 * In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
 */

/**
 * 
You can achieve this by using the filter() method to iterate over the array and keep only the elements that are non-negative integers. Here's the implementation:
 */

function filterNonNegativeIntegers(arr) {
    return arr.filter(item => typeof item === 'number' && item >= 0);
}

function filter_list(l) {
    return l.filter(v => typeof v == "number")
}