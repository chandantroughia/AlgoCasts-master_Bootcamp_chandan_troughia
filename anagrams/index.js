// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

  //(/[^\w]/g, "")

  stringA = stringA.replace("[^A-Za-z0-9]", "").toLowerCase().split('').sort().join('');
  stringB = stringB.replace("[^A-Za-z0-9]", "").toLowerCase().split('').sort().join('');
  if(stringA.length != stringB.length) return false;

  console.log(stringA);
  console.log(stringB);

  return stringA === stringB;
}


module.exports = anagrams;

//
// function anagrams(stringA, stringB) {
//
//   //(/[^\w]/g, "")
//
//   stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
//   stringB = stringB.replace(/[^\w]/g, "").toLowerCase();
//   if(stringA.length != stringB.length) return false;
//
//
//   const mapA = helper(stringA);
//   const mapB = helper(stringB);
//
//   for(let char in mapA){
//     if(mapA[char] != mapB[char]) return false;
//   }
//
//   console.log(mapA);
//   console.log(mapB);
//
//   return true;
//
//
// }
//
// function helper(str){
//   const charMap = {};
//
//   for(let char of str){
//     charMap[char] = charMap[char]+1 || 1;
//   }
//
//   return charMap;
// }
