// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
  let result=""
  const numbers="0123456789"

  for(let i=0; i<str.length; i++) {
   
    if (numbers.includes(str[i])){
      result+=""
    }else{
      result+=str[i]
    }
  }
  
  const reversed=result.split("").reverse().join("")
  console.log(reversed)
    return reversed
}


console.log(reverseWithoutNumbers("hello123world456")); // Виведе: "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz"));       // Виведе: "zyxabc"

module.exports = reverseWithoutNumbers;