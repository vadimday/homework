function numbers(...args) {
  let count = 0;

  for (let arg of args) {
    if (typeof arg === "number" && !isNaN(arg)) {
      count++;
    }
  }

  return count;
}

console.log(numbers(1, 2, "a")); // 2
console.log(numbers(true, 2, false)); // 1
console.log(numbers()); // 0
