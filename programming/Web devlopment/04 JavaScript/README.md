# JavaScript

JavaScript is a high-level, interpreted programming language that is primarily used to add interactive features and dynamic behavior to web pages.

## Cheat sheet

### [JavaScript cheat sheet PDF](Javascript-Cheat-Sheet.pdf)

## ES6 Cheat Sheet

ECMAScript 2015 (ES6) introduced many new features to JavaScript. This cheat sheet covers some of the main features.

### let & const

- `let` - Declare block-scoped variable
- `const` - Declare constant, cannot be reassigned

```js
let name = "John";
const age = 30;
```

### Arrow Functions

- Shorter syntax
- Lexical `this` binding (captures `this` from surrounding scope)

```js
const add = (a, b) => a + b;

const square = (num) => num * num;

const greet = (name = "Guest") => `Hello ${name}!`;
```

### Classes

- Define classes
- Extend classes

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  greeting() {
    return `Hello! My name is ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, degree) {
    super(name); // call parent constructor
    this.degree = degree;
  }
  greeting() {
    return `Hello, I'm ${this.name} and I'm studying ${this.degree}`;
  }
}
```

### this

- `this` refers to object invoked
- Arrow functions do _not_ have their own `this` binding

```js
let obj = {
  name: "John",
  greet: function () {
    console.log(`Hello ${this.name}!`);
  },
};

obj.greet();
```

### Enhanced Object Literals

```js
const name = 'John';
const age = 30;

const person = {
  name,
  age,
  greet() { ... }
}
```

### String Templates

```js
const name = "John";
const age = 30;

console.log(`Hello, my name is ${name} and I'm ${age} years old!`);
```

### Rest Parameters

```js
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}

sum(1, 2, 3); // 6
```

### Spread Operator

```js
const nums = [1, 2, 3];
const newNums = [0, ...nums, 4];
// [0, 1, 2, 3, 4]
```

### Destructuring

```js
const { name, age } = { name: "John", age: 30 };

const [x, y] = [1, 2];
```

### Default Parameters

```js
function greet(name = 'Stranger') {...}

greet(); // Hello Stranger!
```

### Modules

```js
// export
export const name = "John";

// import
import { name } from "./module.js";
```

### Promises

- Asynchronous programming pattern
- Represents a value that may not be available yet, but will be resolved at some point

```js
const promise = new Promise((resolve, reject) => {
  // Do some asynchronous operation...
  if (/* operation was successful */) {
    resolve(/* result */);
  } else {
    reject(/* error */);
  }
});

promise
  .then(result => {
    // Do something with the result
  })
  .catch(error => {
    // Handle the error
  });
```
