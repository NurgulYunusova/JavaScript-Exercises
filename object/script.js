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

// TASK 3
function handleObjects(obj, key, action) {
  switch (action) {
    case "get":
      console.log(obj.key);
      break;
    case "add":
      obj.emptyString = "";
      console.log(obj);
      break;
    case "delete":
      delete obj.key;
      console.log(obj);
      break;
    default:
      console.log(obj);
  }
}

const student = {
  name: "Maxim",
  programmingLanguage: "JavaScript",
};

const result = handleObjects(student, "programmingLanguage", "delete");
console.log("result", result);
