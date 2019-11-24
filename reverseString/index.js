// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// FIRST SOLUTION
// function reverse(str) {
//    let newString = str.split('');
//    newString.reverse();
//    return newString.join('');
// }
// SECOND SOLUTION
// function reverse(str) {
//    let strringValue = [];
//    let newString = str.split('');
//    for (let i = 0; i < newString.length; i++) {
//       strringValue.push(newString[(newString.length-1)-i]);
//    }  
//   return strringValue.join('');
// }
// SECOND SOLUTION
// function reverse(str) {
//    let strringValue = '';
//    for (let i = 0; i < str.length; i++) {
//       strringValue = str[i] + strringValue;
//    }  
//   return strringValue;
// }
// SECOND SOLUTION
   // function reverse(str) {
   //    let reversedString = '';
   //    for (let characters of str) {
   //       reversedString = characters + reversedString;
   //    }  
   // return reversedString;
   // }
   // THIRD SOLUTION
   function reverse(str) {
      return str.split('').reduce((reversed, characters) => {
           return characters + reversed;
      },'');
   }
module.exports = reverse;
