"use strict";

// Задача: Напишіть функцію findMax, яка приймає масив чисел і повертає найбільше число в масиві.
function findMax(numbers) {
  var max = numbers[0];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = numbers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var number = _step.value;

      if (number > max) {
        max = number;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return max;
} // Приклади використання:


console.log(findMax([3, 5, 7, 2, 8])); // Виведе: 8

console.log(findMax([10, 20, 5, 30])); // Виведе: 30

module.exports = findMax;
//# sourceMappingURL=task4.dev.js.map
