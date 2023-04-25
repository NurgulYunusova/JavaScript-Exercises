// // TASK 1
// const getName1 = function (name) {
//   return `Name equals ${name}`;
// };

// function getName2(name) {
//   return `Name equals ${name}`;
// }

// const getName3 = (name) => {
//   return `Name equals ${name}`;
// };

// console.log(getName1("Jahan"));
// console.log(getName2("Aydan"));
// console.log(getName3("Nurgul"));

// // TASK 2
// function getSumOfNumbers(number, type = "odd") {
//   let sum = 0;

//   for (let i = 0; i <= number; i++) {
//     if (type === "odd" && i % 2 === 1) {
//       sum += i;
//     } else if (type === "even" && i % 2 === 0) {
//       sum += i;
//     } else if (type === "") {
//       sum += i;
//     }
//   }

//   return sum;
// }

// console.log(getSumOfNumbers(10, "odd"));
// console.log(getSumOfNumbers(10, "even"));
// console.log(getSumOfNumbers(10, ""));

// // TASK 3
// function getDivisors(number, start = 1) {
//   if (!Number.isInteger(number) || number <= 0) {
//     alert("Number must be an integer and greater than zero!");
//     return 0;
//   }

//   let count = 0;

//   for (let i = start; i <= number; i++) {
//     if (number % i === 0) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(getDivisors(4));
// console.log(getDivisors(5));
// console.log(getDivisors(12));
// console.log(getDivisors(30));
// console.log(getDivisors(-8));
// console.log(getDivisors("cat"));

// // TASK 4
// function checkQuestionAnswer(question, correctAnswer) {
//   let userAnswer = prompt(question).trim().toLowerCase();

//   if (
//     userAnswer === correctAnswer.trim().toLowerCase() ||
//     userAnswer === "apple"
//   ) {
//     alert("The answer is correct");
//   } else {
//     alert("The answer is incorrect");
//   }
// }

// checkQuestionAnswer("Is the watermelon a fruit or a berry?", "A berry");
// checkQuestionAnswer("How many teeth does an average adult have?", "32");
// checkQuestionAnswer(
//   "What is the name of the smallest bird in the world?",
//   "Hummingbird"
// );
