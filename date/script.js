// // TASK 1
// function getDateFormat(date, separator = ".") {
//   let day = ("0" + date.getDate()).slice(-2);
//   let month = ("0" + (date.getMonth() + 1)).slice(-2);
//   let year = date.getFullYear();

//   if (separator === "-") {
//     return `${day}-${month}-${year}`;
//   }

//   return `${day}${separator}${month}${separator}${year}`;
// }

// let date = new Date("2003-03-30");

// let newDate1 = getDateFormat(date);
// console.log(newDate1);

// let newDate2 = getDateFormat(date, "-");
// console.log(newDate2);

// // TASK 2
// function getDaysBeforeBirthday(nextBirthdayDate) {
//   let today = new Date();
//   nextBirthdayDate.setFullYear(today.getFullYear());

//   if (today > nextBirthdayDate) {
//     nextBirthdayDate.setFullYear(today.getFullYear() + 1);
//   }

//   let result = Math.round((nextBirthdayDate - today) / (1000 * 60 * 60 * 24));
//   console.log(`There are ${result} days until next birthday`);
// }

// let nextBirthdayDate = new Date("2003-03-30");
// getDaysBeforeBirthday(nextBirthdayDate);

// // TASK 3
// function addDays(date, days = 1) {
//   let newDate = new Date(date);
//   newDate.setDate(newDate.getDate() + days);
//   return newDate;
// }

// let anyDate = new Date("2003-03-30");
// let updatedDate = addDays(anyDate, 8);
// console.log(updatedDate);
