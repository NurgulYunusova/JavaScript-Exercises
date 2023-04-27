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
//     if (!this.words.hasOwnProperty(word)) {
//       this.words[word] = { word: word, description: description };
//     }
//   }

//   remove(word) {
//     if (this.words.hasOwnProperty(word)) {
//       delete this.words[word];
//     }
//   }

//   get() {
//     if (this.words.hasOwnProperty(word)) {
//       return this.words[word];
//     }

//     return null;
//   }

//   showAllWords() {
//     for (let word in this.words) {
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

// dictionary.remove("JavaScript");
// dictionary.showAllWords();
// // Web developer - A person who creates new services and sites or maintains and complements existing ones

// // TASK 5
// class HardWordsDictionary extends Dictionary {
//   constructor(name) {
//     super(name);
//   }

//   add(word, description) {
//     if (!this.words.hasOwnProperty(word)) {
//       this.words[word] = {
//         word: word,
//         description: description,
//         isDifficult: true,
//       };
//     }
//   }
// }

// const hardWordsDictionary = new HardWordsDictionary("Hard words");
// hardWordsDictionary.add(
//   "amateur",
//   "One who practices science or art without special training, having only a superficial knowledge."
// );
// hardWordsDictionary.add(
//   "neologism",
//   "A new word or expression, as well as the new meaning of the old word."
// );
// hardWordsDictionary.add(
//   "quantum",
//   "The indivisible part of some quantity in physics."
// );

// hardWordsDictionary.remove("neologism");
// hardWordsDictionary.showAllWords();

// // amateur - Someone who is engaged in science or art without special training, possessing only superficial knowledge.
// // quantum - An indivisible part of any quantity in physics.

// // TASK 6
// class Dictionary {
//   #name;
//   #words;

//   constructor(name) {
//     this.#name = name;
//     this.#words = {};
//   }

//   add(word, description) {
//     if (!this.#words.hasOwnProperty(word)) {
//       this.#words[word] = {
//         word: word,
//         description: description,
//       };
//     }
//   }

//   remove(word) {
//     delete this.#words[word];
//   }

//   get allWords() {
//     return this.#words;
//   }

//   get mainName() {
//     return this.#name;
//   }

//   set setMainName(name) {
//     this.#name = name;
//   }

//   addNewWord(word, description) {
//     this.#words[word] = {
//       word: word,
//       description: description,
//     };
//   }

//   showAllWords() {
//     for (let word in this.#words) {
//       console.log(`${word} - ${this.#words[word].description}`);
//     }
//   }
// }

// class HardWordsDictionary extends Dictionary {
//   add(word, description) {
//     super.add(word, description);

//     if (word in this.allWords) {
//       this.allWords[word].isDifficult = true;
//     }
//   }
// }

// const hardWordsDictionary = new HardWordsDictionary("Hard words");
// hardWordsDictionary.add(
//   "amateur",
//   "One who practices science or art without special training, having only a superficial knowledge."
// );
// hardWordsDictionary.add(
//   "neologism",
//   "A new word or expression, as well as the new meaning of the old word."
// );
// hardWordsDictionary.add(
//   "quantum",
//   "The indivisible part of some quantity in physics."
// );

// hardWordsDictionary.remove("neologism");
// hardWordsDictionary.showAllWords();

// console.log(hardWordsDictionary.mainName); // Difficult words
// hardWordsDictionary.setMainName = "New Dictionary";
// console.log(hardWordsDictionary.mainName); // New Dictionary
// console.log(hardWordsDictionary.allWords); // displays an object that contains the words dilettante and quantum

// // TASK 7
// class Developer {
//   constructor(fullName, age, position) {
//     this.fullName = fullName;
//     this.age = age;
//     this.position = position;
//     this.technologies = [];
//   }

//   code() {}

//   learnNewTechnology(technology) {
//     this.technologies.push(technology);
//   }
// }

// class JuniorDeveloper extends Developer {
//   constructor(fullName, age) {
//     super(fullName, age, "Junior");
//     this.technologies = ["HTML", "CSS", "JavaScript"];
//   }

//   code() {
//     console.log("Junior developer is writing code...");
//   }
// }

// class MiddleDeveloper extends Developer {
//   constructor(fullName, age) {
//     super(fullName, age, "Middle");
//     this.technologies = ["HTML", "CSS", "JavaScript", "React"];
//   }

//   code() {
//     console.log("Middle developer is writing code...");
//   }
// }

// class SeniorDeveloper extends Developer {
//   constructor(fullName, age) {
//     super(fullName, age, "Senior");
//     this.technologies = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];
//   }

//   code() {
//     console.log("Senior developer is writing code...");
//   }
// }

// const juniorDeveloper = new JuniorDeveloper("Anastasia", 20);
// const middleDeveloper = new MiddleDeveloper("Igor", 25);
// const seniorDeveloper = new SeniorDeveloper("Maxim", 30);

// juniorDeveloper.code(); // Junior developer writes code...
// middleDeveloper.code(); // Middle developer writes code...
// seniorDeveloper.code(); // Senior developer writes code...

// console.log(
//   juniorDeveloper.fullName,
//   juniorDeveloper.age,
//   juniorDeveloper.position
// ); // 'Anastasia', 20, 'Junior'
// console.log(
//   middleDeveloper.fullName,
//   middleDeveloper.age,
//   middleDeveloper.position
// ); // 'Igor', 25, 'Middle'
// console.log(
//   seniorDeveloper.fullName,
//   seniorDeveloper.age,
//   seniorDeveloper.position
// ); // 'Maxim', 30, 'Senior'
