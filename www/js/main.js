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

// var str = "word";

// switch(str) {
//   case "4":
//     console.log("Значення змінної = 4");
//     break;
//   case "45":
//     console.log("Значення змінної = 45");
//     break;
//   case "word":
//     console.log("Значення змінної = <word>");
//     break;
//   default:
//     console.log("Default");
//   }


// lesson_6

// var arr = new Array();
// var arr = [5, true, 'str', 5.7, -100];
// arr[3] = 'word';
// console.log(arr.length);

// var matrix = [[4, 6, 8], [5.7, true, 'str'], [0, -100]];
//  matrix[1][2] = "word";
//  console.log(matrix);


// lesson_7

// for(var i = 100; i > 5; i /= 2){
//   console.log(i);
// }

// var j = 1000;
// while(j >= 100) {
//   console.log(j);
//   j -= 100;
// }

// var IsHasCar = true;
// while(isHasCar) {

// }

// var x = 0;
// do {
//   console.log(x)
//   x++;
// } while(x < 10);

// for(var i = 10; i <= 20; i += 2){
//   if (i > 15)
//     break;
//   console.log(i);
// }

// for(var i = 10; i <= 20; i++){
//   if (i % 2 == 0)
//     continue;
//   console.log(i);
// }

// var arr = [4, 2, 6, 25, -1]
// for (var i = 0; i < arr.length; i++) {
//   arr[i] *= 2;
//   console.log("Елемент " + (i + 1) + ": " + arr[i]);
// }


// lesson_8

// alert("Яка хороша погода!");

// var data = confirm("Ви зараз вдома?");
// if (data){
//   alert("Ви молодець!");
// }

// var data = prompt("Cкільки вам років?");
// if (data >= 18){
//   alert("Ви повноліnній!");
// }

// var person = null;
// if (confirm("Ви точно впевнені?")){
//   person = prompt("Введіть ваше і'мя")
//   alert("Hello, " + person);
// } else {
//   alert("Ви натиснули 'відміна'");
// }


// lesson_9

// function info(words) {
//   console.log("Result: " + words);
// }

// function sum(a, b) {
//   var res = a + b;
//   info(res);
// }

// sum(5, -7)

// function sum_arr(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// var arr_1 = [1, 2, 3, 4, 5, 6, 7];
// var arr_2 = [1, 2, 3, 4, 5, 6, 8];
// var arr_3 = [1, 2, 3, 4, 5, 6, 90];

// var res = sum_arr(arr_1);
// info(res);
// // sum_arr(arr_2);
// // sum_arr(arr_3);

// var num = 10; // global

// function info() {
//   var num = 20; // local
//   console.log(num);
// }

// info(); 

// console.log(num);


// lesson_10

// var counter = 0;

// function onClickButton(el) {
//   counter++;
//   el.innerHTML = "Ви натиснули на кнопку: " + counter;
//   el.style.background = "red";
//   el.style.color = "white";

//   el.style.cssText = "border-radius: 5px; border: 0; font-size: 20px"
// }

// function onInput(el) {
//   if (el.value == "Hello")
//     alert("І тобі привіт!")
//   console.log(el.value);
// }


// lesson_11

// var text = document.getElementById('text');
// text.title = "New text";
// console.log(text.title);

// text.style.color = "white";
// text.style.backgroundColor = "red";

// text.innerHTML = "New<br>string";

// document.getElementById('text').style.color = "black";

// var spans = document.getElementsByTagName('span');
// for (var i = 0; i < spans.length; i++) { вибираємо елементи по тегу
//   console.log(spans[i].innerHTML);
// }

// var spans = document.getElementsByClassName('simple-text');
// for (var i = 0; i < spans.length; i++) { // вибираємо елементи по тегу
//   console.log(spans[i].innerHTML);
// }

// document.getElementById("main-form").addEventListener("submit", checkForm);

// function checkForm(event) {
//   event.preventDefault();
//   var el = document.getElementById("main-form");

//   var name = el.name.value;
//   var pass = el.pass.value;
//   var repass = el.repass.value;
//   var state = el.state.value;

//   var fail = ""

//   if (name == "" || pass =="" || state == "") {
//     fail = "Заповніть усі поля";
//   } 
//   else if (name.length <= 5 || name.length > 15){
//     fail = "Введіть коректне ім'я(від 5 до 15 символів)";
//   }
//   else if (pass != repass) {
//     fail = "Паролі повинні співпадати";
//   }
//   else if (pass.split("&").lenght > 1) {
//     fail = "Некоректний пароль";
//   }



//   if (fail != "") {
//       document.getElementById("error").innerHTML = fail;
//   } 
//   else {
//     alert("Форма заповнена успішно");
//     window.location = 'https://www.youtube.com';
//   }
// }


// lesson_12

// var counter = 0;
// var id = setInterval(my_func, 1000);

// function my_func() {
//   counter++;
//   console.log("Пройшло секунд: " + counter)

//   if (counter == 5)
//     clearInterval(id)
// }

// setInterval(function my_func() {
//   counter++;
//   console.log("Пройшло секунд: " + counter)
// }, 1000);


// setTimeout(my_func, 2000);

// function my_func(){
//   console.log("Timer is working");
// }


// lesson_13

// var date = new Date();

// console.log(date.getFullYear());
// console.log(date.getMonth() + 1)
// console.log("Час: " + date.getHours() + ":" + date.getMinutes())

// var arr = [5, 90, 32, 7, 8, 9];
// console.log(arr.length);
// console.log(arr.sort());
// console.log(arr.join(", "));

// var str = arr.reverse().join(", ");

// console.log(str.split(", "));

class Person {
  constructor(name, age, happiness){
    this.name = name;
    this.age = age;
    this.happiness = happiness;
  }

   info(){
    console.log("Name: " + this.name)
    console.log("Age: " + this.age)
    console.log("Happiness: " + this.happiness)
  }
}

var alex = new Person('Alex', 45, true);
var bob = new Person('Bob', 25, false);

alex.name = 'alex2';

alex.info();
bob.info();