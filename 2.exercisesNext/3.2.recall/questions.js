let selectElementsStartingWithA = (array) => {
    return array.filter((country) => country.startsWith("a"));
}

let selectElementsStartingWithVowel = (array) => {
    //longer working way  
    //return array.filter((country) => country.startsWith("a") || country.startsWith("e") || country.startsWith("i") || country.startsWith("o") || country.startsWith("u"));
    
    //smaller way
    let rex = /^[aeiou]/i;
    let results = array.filter(str => rex.test(str));
    return results;
    
    
   //test       array.filter(str => /^[aeiou]/i.test(str)));
}

let removeNullElements = (array) => {
    for (let i = 0 ; i < array.length ; i++) {
       if ( array[i] == null ) {
      array.splice(i,2);
        }
     }
 return array
    
    //let removeNull = array.filter(function(val) { return val !== null; }).join(", ");
    //console.log(removeNull);
    //console.log(array);
    
    
//    
//    const noFalsyExceptZero = [
//"a",
//"b",
//false,
//  0,
//].filter(el => el === 0 || Boolean(el)  );
//console.log(noFalsyExceptZero);   
}

let removeNullAndFalseElements = (array) => {
    for (let i = 0 ; i < array.length ; i++) {
       if ( array[i] == null ||  array[i] == false) {
      array.splice(i,3);
        }
     }
 return array
}

let reverseWordsInArray = (array) => {
    function reverseArray(arr) {
       for(let idx in arr) { 
         arr[idx] = arr[idx].split('').reverse().join('');
       }
    }
    
    reverseArray(array);
    return array;
  
   // console.log(array.split("").reverse().join("").split(" ").reverse().join(" "));
    
    
    //working 
    //console.log([...array].reverse().join(''))

    
//    const reverPal = (pal) => {
//  return pal.map(word => word.split('').reverse().join(''));
//}
//
//console.log(reverPal(["hello", "how", "are", "you"]));
    
}

let everyPossiblePair = (array) => {
//console.log(array);
  
    
    
//var results = [];
//
//
//for (var i = 0; i < array.length - 1; i++) {
//  // This is where you'll capture that last value
//  for (var j = i + 1; j < array.length; j++) {
//    results.push(array[i] + ' ' + array[j]);
//  }
//}
//
//console.log(results);
//       
//    //console.log(array);
}

let allElementsExceptFirstThree = (array) => {
    let removed = array.splice(0,3);
   return array;
}

let addElementToBeginning = (array, element) => {
     array.unshift(1);
    return array;
}

let sortByLastLetter = (array) => {
    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

let getFirstHalf = (string) => {
    
    var middle = Math.ceil(string.length / 2);
    var s1 = string.slice(0, middle);
    var s2 = string.slice(middle);
    //console.log(s1);
    return s1;  
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
//    console.log(array);
//    
//    let count = 0;
//    
//    function palindrome(text) {
//// Split, reverse and join string to get reversed text
//var reversedText  = array.toLowerCase()
//                    .split('').reverse().join('');
//
//
//return array === reversedText;
//
//
//}
//console.log();

//function findPalindromes(sentence) {
//	const words = array.replace(/[^\w\s]/gi, '').split(' ');
//  const palindromes = words.filter(isPalindrome);
//  return palindromes;
//}
//
//function isPalindrome(word) {
//  if (array.length <= 0) return false;
//  array = array.toLowerCase();
//  for (let i = 0; i < array.length / 2; i++) {
//  	if (array[i] !== array[array.length - 1 - i]) return false;
//  }
//  return true;
//}
    
//    findPalindromes(array);
//    console.log(findPalindromes);
//    console.log(findPalindromes("Madam and John went out at noon"))
    
    
    
    
    
//    //console.log(array);
//    
//    function reverse(text) {
//    return text.replace(/./g, function(c, i, s) { return s[s.length - 1 - i]; });
//}
//
//function checkIsPalindrome(array) {
//    var result = [];
//    for (var i = 0; i < arr.length; i++) {
//        result.push(arr[i] == reverse(arr[i]));
//    }
//    return result;
//}
//
//console.log(checkIsPalindrome);
//    
}

let shortestWord = (array) => {
    return array.reduce(function(a, b) {
    return a.length <= b.length ? a : b;
  })
   // console.log(array);
}

let longestWord = (array) => {
   return array.reduce(function(a, b) {
    return a.length >= b.length ? a : b;
  })
}

let sumNumbers = (array) => {
   // console.log(array);
    
    return array.reduce((a, b) => a + b, 0)

    
}

let repeatElements = (array) => {
    
    const makeRepeated = (arr, repeats) =>
  Array.from({ length: repeats }, () => array).flat();
  
return makeRepeated(array, 2);
    
    
//    var arrayA = array;
//var repeats = 3;
//var arrayB = Array.apply(null, {length: repeats * arrayA.length}).map(function(e,i){return arrayA[i % arrayA.length]});
//    
//    
//    
//    
//    //array(5).fill(2);
//    return array;
//    
}

let stringToNumber = (string) => {
    let integer = parseInt(string, 10);
    return integer;
}

let calculateAverage = (array) => {
    
function getAvg(array) {
  const total = array.reduce((acc, c) => acc + c, 0);
  return total / array.length;
}
const average = getAvg(array);
return average;
 //   console.log(array);
}

let getElementsUntilGreaterThanFive = (array) => {
    
    //working way to get numbers to max or equal 5
//    let number = array.filter((age) => age <= 5);
//    console.log(number);
    
    
    //function to get the first 5 numbers(working but not optimal)
   // let removed = array.splice(6,9);
  // console.log(array);    
    
    //working php
//    $sliced_array = array_slice($array, 0, 5);
//    console.log($sliced_array);
    
    //working
    let numbers = array.slice(0, 6);
    return numbers;
}

let convertArrayToObject = (array) => {
    
   // console.log(array);
   

//    
//    var temp = array.toString() ;
//var theObj = JSON.parse(array);
//console.log(theObj);
    
//    let O = {};
//
//array.forEach(function(item) {
//    var parts = item.split(':').map(function(x) { return x.trim().replace(/\"/g,'') });
//    
//    O[parts[0]] = parts[1];
//});
//console.log(JSON.stringify(O, null, 4));
//    
    
    
    
    
    
    
    
    
    
    
    
    
//    const convertArrayToObject = (array, key) => {
//    const initialValue = {};
//    return array.reduce((obj, item) => {
//    return {
//      ...obj,
//      [item[key]]: item,
//    };
//  }, initialValue);
//};
    
    
    
//    var result = {};
//    for (var i = 0; i < array.length; i++) {
//        result[array[i].key] = array[i].value;
//    }
//
//console.log(result);
    
    
    //console.log(array);
}

let getAllLetters = (array) => {
    console.log(array);
}

let swapKeysAndValues = (object) => {
    const newData = Object.keys(object).reduce(function(obj, key) {
  obj[object[key]] = key;
  return obj;
}, {});
    return newData;
}

let sumKeysAndValues = (object) => {
//    console.log(object);
//    
//    const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);
//    console.log(sumValues(object));
//    
//    console.log(parseInt(object));
   
   
    
    
//    const sumKeys = obj => parseInt(Object.keys(obj).reduce((a, b) => a + b));
//    console.log(sumKeys(object));
   
//    console.log(parseInt(sumKeys(object)));
//
//    
//    
//    
 
    
    
}

let removeCapitals = (string) => {
    string.replace(/(?![a-z])./g, '')
    
    
    
//    console.log(string);
//    //return string.replace( /[^a-z]/g, '' );
//    
//    console.log(string.replace(/(?![a-z])./g, ' '));
//    //console.log(string.replace( /[^a-z]/g, '' ));
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    let today = date;
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!

    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    } 
    if (mm < 10) {
      mm = '0' + mm;
    } 
    today = dd + '/' + mm + '/' + yyyy;
    return today;
}

let getDomainName = (string) => {
//    var str = string;
//var re = "(?<=@).*(?=\.)";
//var found = str.match(re);
//
//console.log(found);
    
    
    
    
    
//    let test = RegExp.match("myname@company.com", "(?<=@).*(?=\.)").value;
//console.log(test);
    
    
    
//var domain = string.substring(string.lastIndexOf("@") +1);
//console.log( domain ); // email.com
    
    
 //  console.log(string);
}

let titleize = (string) => {
//    console.log(string);
//    
//    const sliced = string.slice(0,1);
//    const upper = sliced.toUpperCase();
//    console.log(upper);
    
}

let checkForSpecialCharacters = (string) => {
    let format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    return format.test(string);
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
  if (number === 0 || number === 1)
    return 1;
  for (var i = number - 1; i >= 1; i--) {
    number *= i;
  }
  return number;
}

let findAnagrams = (string) => {
    //console.log(string);
    
    
    
    var input = "mad, ma, cbb";
var words = input.split(", ");
for ( var i = 0; i < words.length; i++) {
    var word = words[i];
    var alphabetical = word.split("").sort().join("");

    for (var j = 0; j < words.length; j++) {

        if (i === j) {
            continue;
        }

        var other = words[j];
        if(alphabetical === other.split("").sort().join("")){
            console.log(word + " - " + other + " (" + i + ", " + j + ")");
        }
    }
}
    
    
    
    
  
    
    
//  var words = ["dell", "ledl", "abc", "cba"];
//
//// The output object
//var anagrams = {};
//
//for (var i in words) {
//    var word = words[i];
//
//    // sort the word like you've already described
//    var sorted = sortWord(word);
//
//    // If the key already exists, we just push
//    // the new word on the the array
//    if (anagrams[sorted] != null) {
//        anagrams[sorted].push(word);
//    } 
//    // Otherwise we create an array with the word
//    // and insert it into the object
//    else {
//        anagrams[sorted] = [ word ];
//    }
//}
//
//// Output result
//for (var sorted in anagrams) {
//    var words = anagrams[sorted];
//    var sep = ",";
//    var out = "";
//    for (var n in words) {
//        out += sep + words[n];
//        sep = "";
//    }
//    document.writeln(sorted + ": " + out + "<br />");
//}

    
    
    
    
    
    
    
    
}

let convertToCelsius = (number) => {
    //console.log(number);
    
    
  
    var fTemp = number;
    var fToCel = Math.round((fTemp - 32) * 5 / 9);
    var message = fToCel;
    return message;

    
   
}

let letterPosition = (array) => {

    
    
    function alphabetPosition(array){
  return array.split('').map(function(character){ return character.charCodeAt(0) - 'a'.charCodeAt(0) + 1; })
}
alphabetPosition(array);
console.log(alphabetPosition(array));
    
    
    
    
    
    
    
    
//    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
//let alphabetPosition = text => 
//  text.split('').map(x => alphabet.indexOf(x) + 1);
//    
//    
////console.log(alphabetPosition(test));
//
//    alphabetPosition(array);
//    console.log(alphabetPosition);
//    
//    
   // console.log(array);
    
    
    
    
  //  const result = array.toLowerCase().match(/[a-z]/g).map(c => c.charCodeAt(0) - 10).join(' ');


    
    
    
    
    //console.log(array);
    
   
//  var result = "";
//  for (var i = 0; i < array.length; i++) {
//    var code = array.toUpperCase().charCodeAt(i)
//    if (code > 64 && code < 91) result += (code - 64) + " ";
//  }
//
//  console.log(result.slice(0, result.length - 1)); 


    
    
}
