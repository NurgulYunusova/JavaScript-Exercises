// // TASK 1
// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.technologies = [];
//     this.status = "Junior";
//   }

//   setTechnologies(technologies) {
//     this.technologies = [...this.technologies, ...technologies];
//   }

//   setNewStatus(newStatus) {
//     this.status = newStatus;
//   }
// }

// const student = new Student("Maxim", 20);
// student.setTechnologies(["HTML", "CSS", "JavaScript"]);
// student.setNewStatus("Middle");
// console.log(student);

// // TASK 2
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   compareAge(newPerson) {
//     if (this.age < newPerson.age) {
//       alert(`${this.name} is younger than ${newPerson.name}`);
//     } else {
//       alert(`${this.name} is older than ${newPerson.name}`);
//     }
//   }
// }

// const person1 = new Person("Maxim", 24);
// const person2 = new Person("Svetlana", 36);
// const person3 = new Person("Irina", 23);

// person1.compareAge(person2); // Maxim is younger than Svetlana
// person2.compareAge(person3); // Svetlana is older than Irina
// person3.compareAge(person1); // Irina is younger than Maxim

// // TASK 3
// class CarService {
//   static DefaultWorkingHours = {
//     from: "9:00",
//     till: "20:00",
//   };

//   constructor(name, workingHours) {
//     this.name = name;
//     this.workingHours = workingHours || CarService.DefaultWorkingHours;
//   }

//   repairCar(carName) {
//     if (!carName) {
//       console.error(
//         "You need to specify the name of the car in order to repair it"
//       );
//       return;
//     }

//     const now = new Date();
//     const currentHour = now.getHours();
//     const openingTime = +this.workingHours.from.split(":")[0];
//     const closingTime = +this.workingHours.till.split(":")[0];

//     if (currentHour < openingTime || currentHour > closingTime) {
//       alert("Unfortunately, we are closed now. Come back tomorrow");
//     } else {
//       alert(`Now we will repair your car ${carName}! Please wait`);
//     }
//   }
// }

// const carService = new CarService("RepairCarNow", {
//   from: "8:00",
//   till: "20:00",
// });

// carService.repairCar("BMW");

// // TASK 4
// class Dictionary {
//   constructor(name) {
//     this.name = name;
//     this.words = {};
//   }

//   add(word, description) {
//     if (!this.words[word]) {
//       this.words[word] = { word, description };
//     }
//   }

//   remove(word) {
//     delete this.words[word];
//   }

//   get() {
//     return this.words[word];
//   }

//   showAllWords() {
//     for (const word in this.words) {
//       console.log(`${word} - ${this.words[word].description}`);
//     }
//   }
// }

// const dictionary = new Dictionary("Explanatory Dictionary");
// dictionary.add("JavaScript", "popular programming language");
// dictionary.add(
//   "Web developer",
//   "A person who creates new services and sites or maintains and supplements existing ones"
// );
// dictionary.add(
//   "Web developer",
//   "A person who creates new services and sites or maintains and supplements existing ones"
// );

// dictionary.remove("JavaScript");
// dictionary.showAllWords();
// // Web developer - A person who creates new services and sites or maintains and complements existing ones
