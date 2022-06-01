// Example 10 - Ввод пользователя и ветвления
//  * Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.
//  *
//  * Если посетитель вводит "Админ", то prompt запрашивает пароль
//  * Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
//  * В противном случае вывести строку "Я вас не знаю"
//  * Пароль проверять так:
//  *
//  * Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
//  * Иначе выводить строку "Неверный пароль"
//  */

// const userName = prompt("Введите Ваш логин");
// console.log(userName);
// let password;

// if (userName === "Админ") {
//   password = prompt("Введите Ваш пароль");
//   console.log(password);
// } else if (userName === null) {
//   console.log("Отмененно");
// } else  {
//   console.log("Я вас не знаю");
// }

// if ( password === "Я админ") {
//   console.log("Здравствуйте!");
// } else console.log("Неверный пароль");

/**
 * Example 11
 * На основе строки "JavaScript is a pretty good language"
 * Cделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать цикл for.
 */

// const strong = "JavaScript is a pretty good language";

// let array = strong.split(" ");
// let newArray = [];
// let newArrayUpperCase = []

// for (let i = 0; i < array.length; i += 1) {
//   newArray = array[i].charAt(0).toUpperCase() + array[i].slice(1)
  
// newArrayUpperCase.push(newArray);
// }

// console.log(newArrayUpperCase.join(""));


/**
 * Example 12
 * Порахувати кількість рядків в змінній text. Використовуючи цикл while.
 */

// const text = `Думи мої, думи мої,
// Лихо мені з вами!
// Нащо стали на папері
// Сумними рядами?..
// Чом вас вітер не розвіяв
// В степу, як пилину?
// Чом вас лихо не приспало,
// Як свою дитину?...`;

// Вариант 1
// console.log(text.split('\n').length)


// Вариант 2
// var count = 1;
// var pos = text.indexOf('\n');


// while (pos !== -1) {
//      count += 1;
//   pos = text.indexOf('\n',  pos + 1);
// }

// console.log (count)


/**
 * Example 13
 * Перевірте, чи має рядок однакову кількість символів «x» і «o». 
 * В змінну res ви маєте записати логічне значення true або false. 
 * Рядок може містити будь-який символ. І бути нечутливим до регістру
 * Протестувати на наступних рядках: xo, xxOo, xxxm, Oo, ooom
 * Використовувати цикл for
 */

// const string = 'xoXxOoXo';
// let res = false;

// stringToLowerCase = string.toLowerCase()

// var countX = 0;
// var posX = stringToLowerCase.indexOf('x');
// var countO = 0;
// var posO = stringToLowerCase.indexOf('o');

// while (posX !== -1) {
//   countX += 1;
//   posX = stringToLowerCase.indexOf('x', posX + 1);
// }
// console.log(countX)

// while (posO !== -1) {
//   countO += 1;
//   posO = stringToLowerCase.indexOf('o', posO + 1);
// }
// console.log(countO)

// if (countX === countO) {
//   res = true;
// }

// console.log(res)

