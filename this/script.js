// // TASK 1
// let student = {
//   stack: ["HTML"],
//   level: 1,
//   improveLevel() {
//     this.level++;
//     if (this.level === 2) {
//       this.stack.push("CSS");
//     } else if (this.level === 3) {
//       this.stack.push("JavaScript");
//     } else if (this.level === 4) {
//       this.stack.push("React");
//     } else if (this.level === 5) {
//       this.stack.push("NodeJS");
//     } else if (this.level > 5) {
//       alert("The student has learned all technologies!");
//     }
//     return this;
//   },
// };

// student
//   .improveLevel()
//   .improveLevel()
//   .improveLevel()
//   .improveLevel()
//   .improveLevel();

// console.log(student);

// // TASK 2
// const dog = {
//   name: "Charlie",
//   type: "Dog",
//   makeSound() {
//     return "Wow-Wow";
//   },
// };

// const bird = {
//   name: "Petya",
//   type: "Sparrow",
//   makeSound() {
//     return "Cheek-chirp";
//   },
// };

// function makeDomestic(isDomestic) {
//   console.log(`${this.type} by name ${this.name} says ${this.makeSound()}`);

//   return {
//     name: this.name,
//     type: this.type,
//     makeSound: this.makeSound,
//     isDomestic: isDomestic,
//   };
// }

// let dogDomestic = makeDomestic.bind(dog, true);
// let birdDomesticCall = makeDomestic.call(bird, true);
// let birdDomesticApply = makeDomestic.apply(bird, [true]);

// console.log(dogDomestic());
// console.log(birdDomesticCall);
// console.log(birdDomesticApply);

// // TASK 3
// const footballer = {
//   fullName: "Cristiano Ronaldo",
//   attack: function () {
//     console.log(
//       `${this.fullName} is now with the ball and starting to attack!`
//     );
//   },
//   scoreGoal: function (sound) {
//     console.log(`${this.fullName} scored a goal! Wow!`);
//     this.celebrate(sound);
//   },
//   celebrate: function (sound) {
//     console.log(sound);
//   },
//   goToSubstitution: function (newPlayer) {
//     console.log(
//       `${this.fullName} goes to replace. ${newPlayer} enters the field`
//     );
//   },
// };

// let attack = footballer.attack.bind(footballer);
// let score = footballer.scoreGoal;
// let substitute = footballer.goToSubstitution;

// attack();
// score.call(footballer, "Siiiiii");
// substitute.apply(footballer, ["Paulo Dibala"]);
