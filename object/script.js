// // TASK 1
// const users = [
//   {
//     username: "David",
//     status: "online",
//     lastActivity: 10,
//   },
//   {
//     username: "Lucy",
//     status: "offline",
//     lastActivity: 22,
//   },
//   {
//     username: "Bob",
//     status: "online",
//     lastActivity: 104,
//   },
// ];

// let onlineUsers = [];
// let usersOnlineNames;

// for (let i = 0; i < users.length; i++) {
//   if (users[i].status === "online") {
//     onlineUsers.push(users[i]);
//   }
// }

// for (let i = 0; i < onlineUsers.length; i++) {
//   usersOnlineNames = onlineUsers.map((user) => user.username).join(",");
// }

// alert(`The following users are online now: ${usersOnlineNames}`);

// // TASK 2
// function giveJobToStudent(student, jobName) {
//   let updatedStudent = { ...student };
//   updatedStudent.job = jobName;
//   fullName = updatedStudent.fullName;

//   console.log(updatedStudent);

//   console.log(
//     `Congratulations! Student ${fullName} has a new job! It is now ${jobName}`
//   );
// }

// const student = {
//   fullName: "Maxim",
//   experienceInMonths: 12,
//   stack: ["HTML", "CSS", "JavaScript", "React"],
// };

// const updatedStudent = giveJobToStudent(student, "web developer");

// // TASK 3
// const student = {
//   name: "Maxim",
//   programmingLanguage: "JavaScript",
// };

// function handleObjects(obj, key, action) {
//   switch (action) {
//     case "get":
//       return obj.key;
//     case "add":
//       obj.emptyString = "";
//       return obj;
//     case "delete":
//       delete obj[key];
//       return obj;
//     default:
//       return obj;
//   }
// }

// let result = handleObjects(student, "programmingLanguage", "delete");
// console.log("result", result);

// // TASK 4
// function getKiller(suspectInfo, deadPeople) {
//   for (let [key, value] of Object.entries(suspectInfo)) {
//     if (deadPeople.every((deadPerson) => value.includes(deadPerson))) {
//       console.log(key);
//     }
//   }
// }

// getKiller(
//   {
//     James: ["Jacob", "Bill", "Lucas"],
//     Johnny: ["David", "Kyle", "Lucas"],
//     Peter: ["Lucy", "Kyle"],
//   },
//   ["Lucas", "Bill"]
// ); // Killer James

// getKiller(
//   {
//     Brad: [],
//     Megan: ["Ben", "Kevin"],
//     Finn: [],
//   },
//   ["Ben"]
// ); // Killer Megan

// // TASK 5
// function getWinner(applicants, winnerObject) {
//   let applicantsKeys = Object.keys(applicants);
//   let randomIndex = getRandomNumberInRange(0, applicantsKeys.length);
//   let winnerKey = applicantsKeys[randomIndex];
//   let winner = applicants[winnerKey];
//   return Object.assign({}, winnerObject, winner);
// }

// function getRandomNumberInRange(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// const todaysWinner = {
//   prize: "$10,000",
// };

// const winnerApplicants = {
//   "001": {
//     name: "Max",
//     age: 25,
//   },
//   201: {
//     name: "Svetlana",
//     age: 20,
//   },
//   304: {
//     name: "Catherine",
//     age: 35,
//   },
// };

// const resultWinner = getWinner(winnerApplicants, todaysWinner);
// console.log("resultWinner", resultWinner); // { prize: '$10,000', name: 'Maxim', age: 25 }

// // TASK 6
// function giveTalonsInOrder(patients, orders) {
//   let result = [];

//   for (let i = 0; i < orders.length; i++) {
//     let order = orders[i];
//     let patient = patients.find((p) => p.id === order);

//     if (patient) {
//       result.push(patient);
//     }
//   }

//   return result;
// }

// const ordersArr = [4, 2, 1, 3];
// const people = [
//   { id: 1, name: "Maxim" },
//   { id: 2, name: "Nicholas" },
//   { id: 3, name: "Angelina" },
//   { id: 4, name: "Vitaly" },
// ];

// const result = giveTalonsInOrder(people, ordersArr);

// console.log("result", result);
// /* Returns an array
// [
//     { id: 4, name: 'Vitaly' },
//     { id: 2, name: 'Nicholas' },
//     { id: 1, name: 'Maxim' },
//     { id: 3, name: 'Angelina' }
// ]
// */
