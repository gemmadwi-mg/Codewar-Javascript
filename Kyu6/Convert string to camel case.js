/**
 * 
 * DESCRIPTION:
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
 */

function toCamelCase(str) {
    return str.split(/[-_]/).map((word, index) => {
        // Capitalize the first word if it was capitalized in the original string
        if (index === 0 && /^[A-Z]/.test(word)) {
            return word.charAt(0) + word.slice(1).toLowerCase();
        }
        // Capitalize all other words
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
}

/**
 * This function splits the input string str using a regular expression matching either a dash or an underscore (/[-_]/). It then maps over each word, capitalizing each one if it's not the first word (index > 0), and ensuring the first word is properly capitalized based on whether it was capitalized in the original string. Finally, it joins the modified words back together into a single string.
 */

console.log(toCamelCase("the-stealth-warrior"));

function toCamelCase(str) {
    let arr = str.split('');
    for (i = 0; i < arr.length; i++) {
        let letter = arr[i];
        if (letter == '_' || letter == '-') {
            arr[i + 1] = arr[i + 1].toUpperCase();
            arr[i] = '';
        }
    }
    return arr.join('');
}

function toCamelCase(str) {
    return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
}