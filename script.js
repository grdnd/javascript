/**
 * 1. Write a JavaScritpt function that reverses a number.
 *  Ex] x = 32243
 *  Expected Output = 34223
 */

let num = 32243;

function reverse(num) {
  num = num + "";

  return num.split("").reverse().join("");
}

console.log(reverse(num)); // 34223

/**
 * 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
 *  A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
 */

function palindrome(str) {
  let regex = /[\W_]/g;

  let lowCaseStr = str.toLowerCase().replace(regex, "");

  let reverseStr = lowCaseStr.split("").reverse().join("");

  return reverseStr === lowCaseStr;
}

console.log(palindrome("nurses run")); // true
console.log(palindrome("are")); // false

/**
 * 3. Write a JavaScript function that generates all combinations of a string.
 * Example string: 'dog'
 * Expected Output: d, do, dog, o, og, g
 */

let possibleCombinations = (str) => {
  let combinations = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      combinations.push(str.slice(i, j));
    }
  }
  return combinations;
};

result = possibleCombinations("Dog");

console.log(result); // ['D', 'Do', 'Dog', 'o', 'og', 'g']

/**
 * 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
 *  Example string: "webmaster"
 *  Expected Output: "abeemrstw"
 *  Assume the punctuation and numbers symbols are not included in the passed string
 */

let str = "webmaster";
function alphabeticalOrder(str) {
  return str.split("").sort().join("");
}

result = alphabeticalOrder(str);

console.log(result); // abeermrstw

/**
 * 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in uppercase.
 *  Example: "the quick brown fox"
 *  Expected Output: "The Quick Brown Fox"
 */

str = "the quick brown fox";

words = str.split(" ");

result = words
  .map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  })
  .join(" ");

console.log(result); // The Quick Brown Fox

/**
 * 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
 *  Example string: 'Web Development Tutorial'
 *  Expected Output: 'Development'
 */

function findLongestWord(str) {
  splitStr = str.split(" ");
  let longestWord = 0;
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length > longestWord) {
      longestWord = splitStr[i].length;
    }
  }
  return longestWord;
}

str = "Web Development Tutorial";
result = findLongestWord(str);

console.log(result); // 5

/**
 * 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
 * Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
 *  Example string: 'The quick brown fox'
 *  Expected Output: 5
 */

function countVowel(str) {
  let vowelCount = str.match(/[aeiou]/gi).length;

  return vowelCount;
}

str = "The quick brown fox";

result = countVowel(str);
console.log(result); // 5

/**
 * 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
 *  Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 */

function isPrime(num) {
  if (num <= 1) {
    return false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
}

num = 2;
num2 = 9801;
result = isPrime(num);
result2 = isPrime(num2);

console.log(result); // true
console.log(result2); // false

/**
 * 9. Write a JavaScript function which accepts an argument and returns the type.
 * Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
 */

function dataType(val) {
  if (typeof val === "boolean") {
    return "boolean";
  } else if (typeof val === "object") {
    return "object";
  } else if (typeof val === "function") {
    return "function";
  } else if (typeof val === "number") {
    return "number";
  } else if (typeof val === "string") {
    return "string";
  } else {
    return "undefined";
  }
}
console.log(dataType(5)); // number
console.log(dataType([1, 2])); // object
console.log(dataType("hello")); // string

const hello = () => {
  console.log("hello");
};
console.log(dataType(hello)); // function

/**
 * 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
 */

let matrix = (val) => {
  for (let i = 0; i < val; i++) {
    for (let j = 0; j < val; j++) {
      if (i === j) {
        console.log("x");
      } else {
        console.log("o");
      }
    }
    console.log("-----");
  }
};
matrix(3);

/**
 * 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
 * Sample array: [1,2,3,4,5]
 *  Expected Output: 2,4
 */

function getSecond(arr) {
  arr.sort(function (x, y) {
    return x - y;
  });
  let uniqa = [arr[0]];
  let result = [];

  for (let j = 1; j < arr.length; j++) {
    if (arr[j - 1] !== arr[j]) {
      uniqa.push(arr[j]);
    }
  }
  result.push(uniqa[1], uniqa[uniqa.length - 2]);
  return result.join(",");
}

console.log(getSecond([1, 2, 3, 4, 5, 6, 7, 8])); // 2, 7

/**
 * 12. Write a JavaScript function which says whether a number is perfect. According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
 *  Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
 */

function perfectNum(num) {
  let temp = 0;
  for (let i = 0; i <= num / 2; i++) {
    if (num % i === 0) {
      temp += i;
    }
  }

  if (temp === num && temp !== 0) {
    console.log("Perfect");
  } else {
    console.log("Imperfect");
  }
}

// console.log(temp);
console.log(perfectNum(496)); // perfect
console.log(perfectNum(5)); // imperfect

/**
 * 13. Write a JavaScript function to compute the factors of a positive integer.
 */

function computeFactors(num) {
  let factors = [];

  for (let i = 1; i <= Math.floor(Math.sqrt(num)); i += 1)
    if (num % i === 0) {
      factors.push(i);
      if (num / i !== i) factors.push(num / i);
    }
  factors.sort(function (x, y) {
    return x - y;
  });
  return factors;
}
console.log(computeFactors(10)); // [1, 2, 5, 10]
console.log(computeFactors(20)); // [1, 2, 4, 5, 10, 20]
console.log(computeFactors(100)); // [1, 2, 4, 5, 10, 20, 25, 50, 100]

/**
 * 14. Write a JavaScript function to convert an amount to coins.
 *  Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
 *  Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
 *  Output: 25, 10, 10, 1
 */

function findCoins(total, coins) {
  if (total === 0) {
    return [];
  } else {
    if (total >= coins[0]) {
      subtotal = total - coins[0];
      return [coins[0]].concat(findCoins(subtotal, coins));
    } else {
      coins.shift();
      return findCoins(total, coins);
    }
  }
}

console.log(findCoins(100, [25, 10, 5, 2, 1])); // 25, 25, 25, 25

/**
 * 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
 */

function compute(b, n) {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans = b * ans;
  }
  return ans;
}

result = compute(2, 5);
console.log(result);

/**
 * 16. Write a JavaScript function to extract unique characters from a string.
 * Example string: "thequickbrownfoxjumpsoverthelazydog"
 * Expected Output: "thequickbrownfxjmpsvlazydg"
 */

function extractChar(str) {
  let extracted = str;
  let unique = "";
  for (let i = 0; i < extracted.length; i++) {
    if (unique.indexOf(extracted.charAt(i)) == -1) {
      unique += extracted[i];
    }
  }
  return unique;
}

str = "thequickbrownfoxjumpsoverthelazydog";
result = extractChar("thequickbrownfoxjumpsoverthelazydog");

console.log(result); // thequickbrownfxjmpsvlazydg

/**
 * 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
 */

function charCount(str) {
  let characters = {};
  str.replace(/\S/g, function (i) {
    characters[i] = isNaN(characters[i]) ? 1 : characters[i] + 1;
  });
  return characters;
}

console.log(charCount("Anything Goes")); // {A: 1, n: 2, y: 1, t: 1, h: 1, …}

/**
 * 18. Write a function for searching JavaScript arrays with a binary search.
 *  Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
 */

function binarySearch(arr, el) {
  let mid = Math.floor(arr.length / 2);

  if (arr[mid] === el) {
    return mid;
  } else if (arr.length === 1) {
    return null;
  } else if (arr[mid] < el) {
    let Arr = arr.slice(mid + 1);
    let result = binarySearch(arr, el);
    if (result === null) {
      return null;
    } else {
      return mid + 1 + result;
    }
  } else {
    let Arr1 = arr.slice(0, mid);
    return binarySearch(arr, el);
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr, 7); // 7

/**
 * 19. Write a JavaScript function that returns array elements larger than a number.
 */

function biggerThan(num) {
  return function (val, i, arr) {
    return val >= num;
  };
}

result = [10, 20, 30, 40, 50, 60].filter(biggerThan(50));
console.log(result); // [50, 60]

/**
 * 20. Write a JavaScript function that generates a string id (specified length) of random characters.
 * Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
 */

function createId(length) {
  let random = "";
  let charList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    random += charList.charAt(Math.floor(Math.random() * charList.length));
  }
  return random;
}

console.log(createId(20)); // "NoPfDh9TG4lEGcscgQdR"

/**
 * 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
 *  Sample array: [1, 2, 3] and subset length is 2
 *  Expected output: [[2, 1], [3, 1], [3, 2]]
 */

function combinations(array) {
  return new Array(1 << array.length)
    .fill()
    .map((e1, i) => array.filter((e2, j) => i & (1 << j)));
}

console.log(combinations([1, 2, 3]).filter((a) => a.length >= 2));

/**
 * 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
 *  Sample arguments: 'microsoft.com', 'o'
 *  Expected output: 3
 */

function occurrences(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
      count += 1;
    }
  }
  return count;
}

result = occurrences("microsoft.com", "o");
console.log(result); // 3

/**
 * 23. Write a JavaScript function to find the first not repeated character.
 *  Sample arguments: 'abacddbec'
 *  Expected output: 'e'
 */

function nonRepeater(str) {
  let arr = str.split("");
  let result = "";
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count += 1;
      }
    }

    if (count < 2) {
      result = arr[i];
      break;
    }
  }
  return result;
}

console.log(nonRepeater("aabccddeeee")); // b

/**
 * 24. Write a JavaScript function to apply Bubble Sort algorithm.
 *  Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
 *  Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
 *  Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
 */

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}

arr = [234, 43, 55, 63, 5, 6, 235, 547];
bubbleSort(arr); // [5, 6, 43, 55, 63, 234, 235, 547]

/**
 * 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
 *  Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
 *  Expected output: "United States of America"
 */

function longestCountryName(countries) {
  let prevCountryLength = 0;
  let longestCountryLength = 0;
  let longestCountryName;

  countries.forEach((country, i) => {
    prevCountryLength = longestCountryLength;
    let letters = country.split("");
    longestCountryLength = letters.length;
    if (prevCountryLength > longestCountryLength) {
      longestCountryLength = prevCountryLength;
      longestCountryName = countries[i - 1];
    } else {
      longestCountryName = countries[i];
    }
  });
  return longestCountryName;
}

countries = ["Australia", "Germany", "United States of America"];
result = longestCountryName(countries);
console.log(result); // United States of America

/**
 * 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
 */

function pickLongestSubstring(str) {
  let tested = "";
  let longest = "";

  for (let i = 0; i < str.length; i++) {
    if (
      tested.length == 0 ||
      tested.charAt(tested.length - 1) != str.charAt(i)
    ) {
      tested += str.charAt(i);
    } else {
      if (tested.length > longest.length) {
        longest = tested;
        tested = "";
      }
    }
  }

  if (tested.length > longest.length) {
    longest = tested;
  }
  return longest;
}
console.log(pickLongestSubstring("doodle")); // dle
console.log(pickLongestSubstring("zaboomafoo")); // zabo

/**
 * 27. Write a JavaScript function that returns the longest palindrome in a given string.
 *  Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
 *  In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
 */

function longestPalindromeSubstring(str) {
  var n = str.length;

  var maxLength = 1,
    start = 0;

  for (var i = 0; i < str.length; i++) {
    for (var j = i; j < str.length; j++) {
      var flag = 1;

      for (var k = 0; k < (j - i + 1) / 2; k++)
        if (str[i + k] != str[j - k]) flag = 0;

      if (flag && j - i + 1 > maxLength) {
        start = i;
        maxLength = j - i + 1;
      }
    }
  }

  return maxLength;
}

str = "banana";
result = longestPalindromeSubstring(str);
console.log(result); // 5

/**
 * 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
 */

const greet = () => {
  return "Hello,";
};

const name = (user, func) => {
  const message = func();

  console.log(`${message} ${user}`);
};

name("Gord", greet); // Hello, Gord

/**
 * 29. Write a JavaScript function to get the function name.
 */

const function01 = () => {};

const obj = {
  function02: () => {},
};

console.log(function01.name); // function01
console.log(obj.function02.name); // function02
