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
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3]);
let strArray = getArray<string>(["a", "b", "c"]);
```

## Namespaces

```ts
namespace Validator {
  export function isEmail(email: string): boolean {}
}

Validator.isEmail("test@test.com");
```
