# Python

Python is a high-level, versatile, and easy-to-read programming language known for its simplicity and readability. It emphasizes code readability through its use of indentation and has a large standard library that provides ready-to-use modules and functions for various tasks. Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming, making it suitable for a wide range of applications, from web development and scientific computing to artificial intelligence and data analysis.

- [Python](#python)
  - [Python Cheat Sheet](#python-cheat-sheet)
    - [Variables and Data Types](#variables-and-data-types)
    - [String Methods](#string-methods)
    - [Numbers and Math](#numbers-and-math)
    - [User Input](#user-input)
    - [Control Flow](#control-flow)
      - [If Statements](#if-statements)
      - [For Loops](#for-loops)
      - [While Loops](#while-loops)
    - [Lists](#lists)
    - [Dictionaries](#dictionaries)
    - [Functions](#functions)
    - [Classes and OOP](#classes-and-oop)
    - [Exceptions](#exceptions)
    - [Modules](#modules)

## Python Cheat Sheet

### Variables and Data Types

Variables are used to store values. Primitive data types in Python include:

- **Integers** - Whole numbers like 1, 2, 3 etc.
- **Floats** - Decimal numbers like 1.5, 2.75 etc.
- **Strings** - Text values like "Hello"
- **Booleans** - True or False values

```python
number = 10 # integer
price = 1.99 # float
name = "John" #string
is_published = False #boolean
```

You can print variables and check their type using `print()` and `type()`:

```python
num = 10
print(num, type(num)) # 10 <class 'int'>
```

Multiple variables can be assigned in one line:

```python
name, age = "John", 30
```

### String Methods

Common string methods include:

- `len()` - Get length of string
- `upper()` - Convert to uppercase
- `lower()` - Convert to lowercase
- `count()` - Count occurrences of substring
- `replace()` - Replace substring
- `+` - Concatenate strings

```python
name = "john"
print(len(name)) # 4
print(name.upper()) # JOHN
```

### Numbers and Math

Common math functions from `math` module:

- `math.floor()` - Round down
- `math.ceil()` - Round up
- `round()` - Round to nearest integer
- `abs()` - Absolute value

Other common math operations:

- `**` - Exponentiation
- `%` - Modulo/Remainder

```python
import math

print(round(2.7)) # 3
print(math.floor(2.7)) # 2
print(2**3) # 8
print(10 % 3) # 1
```

### User Input

Use `input()` to get user input:

```python
name = input("Enter your name: ")
print("Hello", name)
```

Always wrap `input()` with `int()` or `float()` to convert to number:

```python
age = int(input("Enter your age: "))
```

### Control Flow

#### If Statements

```python
age = 20

if age >= 18:
  print("You are an adult")
elif age < 0:
  print("Invalid age")
else:
  print("You are a child")
```

#### For Loops

```python
for i in range(5):
  print(i) # 0 1 2 3 4

for letter in "Hello":
  print(letter) # H e l l o
```

#### While Loops

```python
count = 0
while count < 5:
  print(count)
  count += 1 # 0 1 2 3 4
```

### Lists

Lists are ordered collections of values.

```python
numbers = [1, 2, 3]

numbers.append(4)
numbers.remove(2)
print(numbers) # [1, 3, 4]
```

Common list methods:

- `append()` - Add to end
- `insert()` - Insert at index
- `remove()` - Remove by value
- `pop()` - Remove from end
- `sort()` - Sort list

### Dictionaries

Dictionaries are unordered key-value pairs.

```python
person = {
  "name": "John",
  "age": 30
}

person["job"] = "Designer"
print(person["name"]) # John
```

Common dict methods:

- `keys()` - Get keys
- `values()` - Get values
- `items()` - Get key-value pairs

### Functions

Functions are reusable blocks of code.

```python
def greet(name):
  print("Hello", name)

greet("John") # Hello John
```

Functions can return values:

```python
def square(x):
  return x * x

result = square(3) # 9
```

### Classes and OOP

Classes are used to create objects.

```python
class Person:

  def __init__(self, name, age):
    self.name = name
    self.age = age

  def greet(self):
    print("Hello, my name is", self.name)

person = Person("John", 30)
person.greet() # Hello, my name is John
```

### Exceptions

Use `try` and `except` to handle errors gracefully.

```python
try:
  num = int(input("Enter a number: "))
except ValueError:
  print("Invalid number entered")
```

### Modules

Reusable code can be organized into modules and imported.

```python
# mymodule.py

def greeting(name):
  print("Hello", name)

# main.py

import mymodule

mymodule.greeting("John")
```
