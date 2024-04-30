//  #! /usr/bin/env node
// This line is called a shabang, It tells the uS to run it with node.js
import inquirer from "inquirer";
// Declare a const answers ` and assigns it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        types: "input",
        message: ("Please Enter your sentence to count the word:")
    }
]);
const words = answers.Sentence.trim().split(" ");
// Print the array of words to the console
console.log(words);
// Print th word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
