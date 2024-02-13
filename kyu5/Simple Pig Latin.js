/** 
 * Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
 */

// Solution
/**
 * You can accomplish this by splitting the input string into words, processing each word individually, and then joining the words back together. Here's how you can implement it:
 */

function pigLatinize(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(' ');

    // Function to process each word
    const pigLatinWord = (word) => {
        // Check if the word ends with a punctuation mark
        const punctuation = word.match(/[.,!?]/);
        let newWord = word.replace(/[.,!?]/g, ''); // Remove punctuation for processing

        // Move the first letter to the end of the word and add 'ay'
        newWord = newWord.slice(1) + newWord[0] + 'ay';

        // Add back the punctuation mark if it was present
        if (punctuation) {
            newWord += punctuation[0];
        }

        return newWord;
    };

    // Process each word and join them back together
    return words.map(pigLatinWord).join(' ');
}
