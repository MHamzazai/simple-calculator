#! /usr/bin/env node
//SHABANG(#! /usr/bin/env node);
import inquirer from "inquirer";
console.log("Welcome To The Cli Based Simple Calculator!.");
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    {
        messge: "Select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// CONDITIONAL IF STATMENT 
if (answer.operator === "Addition") {
    console.log("Ans =", answer.firstNumber + answer.secondNumber);
}
//ELSE IF STATEMENT
else if (answer.operator === "Subtraction") {
    console.log("Ans =", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log("Ans =", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log("Ans =", answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please selesct a valid operator");
}
//console.log("The Answer Showed Above");
