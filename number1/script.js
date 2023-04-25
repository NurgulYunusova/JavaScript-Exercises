// // TASK 1
// let existsUserLogin = "the_best_user";
// let existsUserPassword = "12345678";

// let userLogin = prompt("Enter login").trim();
// let userPassword = prompt("Enter password").trim();

// if (userLogin === existsUserLogin && userPassword === existsUserPassword) {
//   alert(`Welcome, ${userLogin}!`);
// } else {
//   alert("Login and (or) Password entered incorrectly!");
// }

// // TASK 2
// let i = 0;

// while (i < 3) {
//   let newStudent = prompt("Enter the name of the new student!");
//   newStudent = newStudent.trim();

//   if (newStudent) {
//     alert(`Welcome ${newStudent}!`);
//   }

//   i += 1;
// }

// // TASK 3
// let amount = 0;

// for (let i = 0; i <= 100; i++) {
//   amount += i;
// }

// alert(`The sum of numbers from 0 to 100 is ${amount}.`);

// // TASK 4
// let correctAnswers = 0;
// let incorrectAnswers = 0;

// function hint(question, answer) {
//   let userAnswer = +prompt(question);

//   if (userAnswer == answer) {
//     alert("Correct answer!");
//     correctAnswers++;
//   } else {
//     alert("Incorrect answer!");
//     incorrectAnswers++;
//   }
// }

// hint("What's 2 + 2?", 4);
// hint("How much will 2 * 2 be?", 4);
// hint(
//   "Petya had 5 apples. He ate 3 of them and gave 1 to a friend. How many apples does Peter have left?",
//   1
// );
// hint(
//   "Masha had 10 sweets. She ate 2 and gave 1 to a friend. After that, mom gave Masha 5 more sweets. How many sweets did Masha have left in the end?",
//   12
// );
// hint("What is 2 + 2 * 2?", 6);

// alert(
//   `Correct answers: ${correctAnswers} --- Wrong answers: ${incorrectAnswers}`
// );

// // TASK 5]
// let clientName = "Igor";
// let clientSpentForAllTime = 110;
// let clientSpentToday = 25;
// let discount = 0;

// if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
//   discount = 10;
// } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
//   discount = 20;
// } else if (clientSpentForAllTime >= 500) {
//   discount = 30;
// }

// if (discount > 0) {
//   alert(`You are given a discount in ${discount}%!`);
// }

// clientSpentForAllTime += clientSpentToday;

// let payable = clientSpentToday - (clientSpentToday * discount) / 100;

// alert(
//   `Thank you, ${clientName}! Payable ${payable}$. For all the time in our restaurant you spent ${clientSpentForAllTime}$.`
// );

// // TASK 6
// let clientName = prompt("Enter the client's name");
// let clientSpentToday = prompt("How much did the client spend today?");
// let clientSpentForAllTime = prompt("How much did the client spend all time?");

// if (
//   isNaN(parseFloat(clientSpentToday)) ||
//   isNaN(parseFloat(clientSpentForAllTime))
// ) {
//   alert(
//     "The amount that the client spent all time and spent today must be a number! Please reload the page to try again."
//   );
// } else {
//   clientSpentToday = parseFloat(clientSpentToday);
//   clientSpentForAllTime = parseFloat(clientSpentForAllTime);

//   let discount = 0;

//   if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
//     discount = 10;
//   } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
//     discount = 20;
//   } else if (clientSpentForAllTime >= 500) {
//     discount = 30;
//   }

//   if (discount > 0) {
//     alert(`You are given a discount in ${discount}%!`);
//   }

//   let payable = clientSpentToday - (clientSpentToday * discount) / 100;

//   clientSpentForAllTime += clientSpentToday;

//   alert(
//     `Thank you, ${clientName}! Payable ${payable}$. For all the time in our restaurant you spent ${clientSpentForAllTime}$.`
//   );
// }
