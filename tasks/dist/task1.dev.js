"use strict";

// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u) 
// на певний символ, наприклад *.
function replaceVowels(str) {
  var result = "";
  var vowels = "aeouyiAEOUYI";

  for (var i = 0; i < str.length; i++) {
    console.log(str[1]);

    if (vowels.includes(str[i])) {
      result += "*";
    } else {
      result += str[i];
    }
  }

  return result;
}

console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"

console.log(replaceVowels("Javascript")); // Виведе: "J*v*scr*pt"

module.exports = replaceVowels;
//# sourceMappingURL=task1.dev.js.map
