// // TASK 1
// function getSumOfSequence(number) {
//   let arr = [];

//   for (let i = 1; i <= number; i++) {
//     arr.push(i);
//   }

//   return arr[0] + arr[arr.length - 1];
// }

// console.log(getSumOfSequence(5));
// console.log(getSumOfSequence(10));
// console.log(getSumOfSequence(20));

// // TASK 2
// const peopleWaiting = [
//   "Kristina",
//   "Oleg",
//   "Kirill",
//   "Maria",
//   "Svetlana",
//   "Artem",
//   "Gleb",
// ];

// function giveParcel() {
//   let name = peopleWaiting.shift();

//   if (name === "Kristina" || name === "Oleg") {
//     alert(
//       `${name} received the package. There are ${peopleWaiting.length} people left in the queue.`
//     );
//   } else if (name === "Kirill") {
//     alert(
//       `${name} received the package. There are ${peopleWaiting.length} people left in the queue.`
//     );
//     peopleWaiting.splice(1);
//   } else {
//     alert(`${name} did not receive the package and left the queue.`);
//   }
// }

// function leaveQueueWithoutParcel() {
//   let name = peopleWaiting.pop();
//   alert(
//     `${name} did not receive the package and left the queue. There are ${peopleWaiting.length} people left in the queue.`
//   );
// }

// giveParcel();
// giveParcel();
// giveParcel();
// leaveQueueWithoutParcel();

// // TASK 3
// // FOR LOOP
// const numbers = [10, 4, 100, -5, 54, 2];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += Math.pow(numbers[i], 3);
// }

// console.log(sum);

// // FOR OF LOOP
// const numbers = [10, 4, 100, -5, 54, 2];
// let sum = 0;

// for (let number of numbers) {
//   sum += Math.pow(number, 3);
// }

// console.log(sum);

// // FOR EACH METHOD
// const numbers = [10, 4, 100, -5, 54, 2];
// let sum = 0;

// numbers.forEach((number) => {
//   sum += Math.pow(number, 3);
// });

// console.log(sum);

// // REDUCE METHOD
// const numbers = [10, 4, 100, -5, 54, 2];

// const sum = numbers.reduce((acc, number) => {
//   return acc + Math.pow(number, 3);
// }, 0);

// console.log(sum);

// // TASK 4
// const coffees = ["Latte", "Cappuccino", "Americano"];

// let coffeeName = prompt("Search coffee by name:");

// let index = coffees.findIndex(
//   (coffee) => coffee.toLowerCase() === coffeeName.toLowerCase()
// );

// if (index !== -1) {
//   let coffee = coffees[index];

//   alert(
//     `Keep your favorite coffee ${coffee}. It is ${
//       index + 1
//     }-th most popular in our coffee shop.`
//   );
// } else {
//   alert("Unfortunately, this type of coffee is not available");
// }

// // TASK 5
// const coffees = ["Latte", "Cappuccino", "Americano"];
// const prices = [1.5, 1, 2];

// const updatedPrices = prices.map((price) => price + 0.5);

// coffees.forEach((coffee, index) => {
//   const price = updatedPrices[index];
//   alert(`${coffee} is now worth ${price} euro`);
// });

// // TASK 6
// let clientsEstimations = [];

// function askClientToGiveEstimation() {
//   let estimation = Number(
//     prompt("How do you rate our coffee shop from 1 to 10?")
//   );

//   if (estimation >= 1 && estimation <= 10) {
//     clientsEstimations.push(estimation);
//   }
// }

// for (let i = 0; i < 5; i++) {
//   askClientToGiveEstimation();
// }

// let goodEstimations = clientsEstimations.filter(
//   (estimation) => estimation > 5
// ).length;

// let notGoodEstimations = clientsEstimations.filter(
//   (estimation) => estimation <= 5
// ).length;

// alert(
//   `Total positive estimates: ${goodEstimations}; Total negative ratings: ${notGoodEstimations}`
// );

// // TASK 7
// let goals = [8, 1, 1, 3, 2, -1, 5];

// let maxGoals = Math.max(...goals.filter(goal => goal >= 0));
// let maxIndexes = goals.reduce((acc, cur, i) => (cur === maxGoals ? acc.concat(i) : acc), []);
// let maxIndexesStr = maxIndexes.join(", ");
// alert(`The most scoring match was at number ${maxIndexesStr}. There were ${maxGoals} goals scored in it.`);

// let minGoals = Math.min(...goals.filter(goal => goal >= 0));
// let minIndexes = goals.reduce((acc, cur, i) => (cur === minGoals ? acc.concat(i) : acc), []);
// let minIndexesStr = minIndexes.join(", ");
// alert(`The most unsuccessful matches were under the numbers ${minIndexesStr}. In each of them, ${minGoals} ball(s) were scored.`);

// let totalGoals = goals.reduce((acc, cur) => (cur >= 0 ? acc + cur : acc), 0);
// alert(`The total number of goals for the season is equal to ${totalGoals}`);

// let hasDefeats = goals.some(goal => goal < 0);
// alert(`There were automatic defeats: ${hasDefeats ? "yes" : "no"}`);

// let avgGoals = totalGoals / goals.filter(goal => goal >= 0).length;
// alert(`The average number of goals per match is equal to ${avgGoals}`);

// let sortedGoals = goals.slice().sort((a, b) => a - b);
// let sortedGoalsStr = sortedGoals.join(", ");
// alert(`Sorted goals: ${sortedGoalsStr}`);
