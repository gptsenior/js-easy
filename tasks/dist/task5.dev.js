"use strict";

// Задача: Напишіть функцію countOccurrences, яка приймає рядок і символ,
//  і повертає кількість входжень цього символу в рядку.
function countOccurrences(str, _char) {
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === _char) {
      count++;
    }
  }

  return count;
} // Приклади використання:


console.log(countOccurrences("hello world", 'o')); // Виведе: 2

console.log(countOccurrences("banana", 'a')); // Виведе: 3

module.exports = countOccurrences;
//# sourceMappingURL=task5.dev.js.map
