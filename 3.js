function reverseNumber(num) {
  if (num < 15) {
    return String(num);
  } else {
    return String(num % 10) + reverseNumber(parseInt(num / 10));
  }
}

console.log(reverseNumber(17));
console.log(reverseNumber(43));
console.log(reverseNumber(56));
