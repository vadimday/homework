function hasProperty(obj, prop) {
  return prop in obj;
}

const person = {
  name: "asfas",
  age: 15,
  city: "aaa",
};

console.log(hasProperty(person, "name"));
console.log(hasProperty(person, "job"));
console.log(hasProperty(person, "age"));
