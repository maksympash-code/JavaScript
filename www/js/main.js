// lesson_2

// document.write("JavaScript говорить мені"); // застарілий метод
// console.log("JavaScript говорить мені");
// console.info("JavaScript говорить мені");
// console.error("JavaScript говорить мені");
// console.warn("JavaScript говорить мені");



// lesson_3

// var number;
// number = 5;

// const number = 5;
// // number = 10;
// console.log("Змінна: " + number + ".");

// var num;
// num = true;
// num = "Речення";
// console.log("Значення: " + num);

// var num_1 = 5;
// var num_2 = "5";
// console.log(num_1 + num_2);


// lesson_4

// var num_1 = 5.4;
// var num_2 = 15;

// res = num_1 - num_2;
// res = num_1 + num_2;
// res = num_1 * num_2;
// res = num_1 / num_2;
// console.log("Результат: " + res)

// var num_3 = 5;
// num_3 += 7;
// num_3--;
// console.log("Результат: " + num_3)

// var str_1 = Number("12"); // class Number
// var str_2 = Number("2");
// console.log("Result: " + (str_1 + str_2));

// console.log("Math: " + Math.PI);
// console.log("Math: " + Math.E);
// console.log("Minimum: " + Math.min(4, 6, -8, 2, 0, 5, 8))
// console.log("Max: " + Math.max(4, 6, -8, 2, 67, 5, 8))


// lesson_5

// var number = 15;
// var isHasHouse = true;
// // || = or, && = and, 

// if (number == 15 && isHasHouse) {
//   console.log("True");
// } else if (number >= 15) {
//   console.log(">= 15")
// } else if (number == 7) {
//   console.log("7!")
// } else {
//   console.log("False");
// }

var str = "word";

switch(str) {
  case "4":
    console.log("Значення змінної = 4");
    break;
  case "45":
    console.log("Значення змінної = 45");
    break;
  case "word":
    console.log("Значення змінної = <word>");
    break;
  default:
    console.log("Default");
  }