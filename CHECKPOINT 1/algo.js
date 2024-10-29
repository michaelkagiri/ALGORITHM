function analyzeSentence(sentence) {
    let length = sentence.length - 1;
    let words = sentence.trim().split(" ").length;
    let vowels = (sentence.match(/[aeiouAEIOU]/g) || []).length;

    console.log(`Length of the sentence: ${length}`);
    console.log(`Number of words: ${words}`);
    console.log(`Number of vowels: ${vowels}`);
}

// Test example
let sentence = "This is a test sentence.";
analyzeSentence(sentence);
