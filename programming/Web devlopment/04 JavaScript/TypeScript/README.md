# TypeScript Cheat Sheet

TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript.

## Table of contents

- [TypeScript Cheat Sheet](#typescript-cheat-sheet)
  - [Table of contents](#table-of-contents)
  - [Installation \& Setup](#installation--setup)
    - [Install TypeScript globally](#install-typescript-globally)
    - [Install TypeScript locally](#install-typescript-locally)
    - [Initialize project](#initialize-project)
    - [Configure TS](#configure-ts)
    - [Compile](#compile)
  - [Basic Types](#basic-types)
  - [Functions](#functions)
  - [Interfaces](#interfaces)
  - [Classes](#classes)
  - [Generics](#generics)
  - [Index Signatures](#index-signatures)
  - [keyof Assertions](#keyof-assertions)
  - [Utility Types](#utility-types)
  - [Namespaces](#namespaces)

## Installation & Setup

### Install TypeScript globally

```bash
npm install -g typescript
# Check version
tsc --version
```

### Install TypeScript locally

```bash
npm install typescript --save-dev
```

### Initialize project

```bash
npm init -y # Generate package.json
tsc --init # Create tsconfig.json
```

`tsconfig.json` will be created with default options.

### Configure TS

Edit `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src/**/*"]
}
```

### Compile

```bash
tsc         # Compile once
tsc --watch # Watch for changes
```

## Basic Types

```ts
let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;
let unionTypes: number | string | boolean; // can = 1962 or = "random string" or = false
let anything: any; // can = anything"

let ids: number[] = [1, 2, 3];
let unionTypesArr: (number | string | boolean)[] = [1, "hello", true, "hi", 2];
let arr: any[] = [1, "Hello", true];

let tuple: [number, string, boolean] = [1, "hello", true];

enum Color {
  Red,
  Blue,
}
let c: Color = Color.Blue;

type alias = boolean;

type myType = {
  string: string;
  number: number;
  boolean?: alias; //? means that the property is optional
};
let myVar: myType = {
  string: "random string",
  number: 1962,
  boolean: false,
};

let my2ndVar: "first" | "second" | "third" = "first";

let numVariable: number = 10;
let anyVariable: any = numVariable as any; // casting number to any type

let strVariable: string = "Hello, World!";
let anyVariable2: any = <any>strVariable; // casting string to any type
```

## Functions

```ts
function add(a: number, b: number): number {
  return a + b;
}

function log(a: any, b?: any) {}
```

## Interfaces

```ts
interface User {
  id: number;
  name: string;
  age?: number;
}

function getUser(user: User) {}

let user: User = {
  id: 1,
  name: "John",
};
```

## Classes

```ts
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class proUser extends User {
  static proUsersNumber: number = 0;

  constructor(
    name: string,
    private readonly isPro: boolean /* private, protected, public */
  ) {
    super(name);
    this.isPro = isPro;
    proUser.proUsersNumber++;
  }

  public get IsPro(): boolean {
    return this.isPro;
  }
}

let user: proUser = new proUser("John", true);
```

## Generics

```ts
interface isTruthy<T> {
  arg: T;
  is: boolean;
}

class myClass<T> {}

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3]);
let strArray = getArray<string>(["a", "b", "c"]);
```

## Index Signatures

```ts
interface MyInterface {
  [key: string]: number;
}

let myObject: MyInterface = {
  age: 30,
  salary: 50000,
  experience: 5,
};

console.log(myObject["age"]); // Output: 30

interface MyInterface2 {
  [key: number]: string;
}

let myObject2: MyInterface2 = {
  0: "Hello",
  1: "World",
  2: "!",
};

console.log(myObject2[1]); // Output: "World"
```

## keyof Assertions

```ts
interface Person {
  name: string;
  age: number;
  location: string;
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let person: Person = {
  name: "John",
  age: 30,
  location: "New York",
};

console.log(getProperty(person, "name")); // Output: "John"
console.log(getProperty(person, "age")); // Output: 30
console.log(getProperty(person, "location")); // Output: "New York"
```

## Utility Types

```ts
// Partial: make all properties of a type optional
interface User {
  id: number;
  name: string;
  age: number;
}

const partialUser: Partial<User> = {
  // all properties are now optional
  id: 1,
  name: "John",
};

// Required: make all properties of a type required
interface User2 {
  id?: number;
  name?: string;
  age?: number;
}

const requiredUser: Required<User2> = {
  // all properties are now required
  id: 1,
  name: "John",
  age: 30,
};

// Pick: select a subset of properties from a type
interface User3 {
  id: number;
  name: string;
  age: number;
}

const pickedUser: Pick<User3, "id" | "name"> = {
  // only "id" and "name" properties are selected
  id: 1,
  name: "John",
};

// Omit: remove a subset of properties from a type
interface User4 {
  id: number;
  name: string;
  age: number;
}

const omittedUser: Omit<User4, "age"> = {
  // "age" property is removed
  id: 1,
  name: "John",
};

// Exclude: exclude a union of types from another type
type MyType = string | number | boolean;

const excludedType: Exclude<MyType, boolean> = "hello"; // boolean type is excluded

// Extract: extract a union of types from another type
type MyType2 = string | number | boolean;

const extractedType: Extract<MyType2, boolean | number> = true; // boolean and number types are extracted

// NonNullable: remove null and undefined from a type
type MyType3 = string | null | number | undefined;

const nonNullableType: NonNullable<MyType3> = "hello"; // null and undefined are removed

// ReturnType: get the return type of a function
function myFunction() {
  return true;
}

type MyReturnType = ReturnType<typeof myFunction>; // MyReturnType is boolean
```

## Namespaces

```ts
namespace Validator {
  export function isEmail(email: string): boolean {}
}

Validator.isEmail("test@test.com");
```
