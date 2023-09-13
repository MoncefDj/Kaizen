# variables and primitive types

THIS_IS_A_CONSTANT = "CONSTANT!"

firstName = "Ultra"
lastName = "Chad"
fullName = firstName + " " + lastName
age = 20
height = 180.9
isHuman = True

print(fullName, "             ", type(fullName))
print(age, "             ", type(age))
print(height, "             ", type(height))
print(isHuman, "             ", type(isHuman))

# multiple assignment

name, age, attractive = "Giga Chad", 99999, True

print(name, "is", age, "yo and he is attractive (", attractive, ")")

# useful string methods

print(len(name))
print(name.find("C"))
print(name.capitalize())
print(name.upper())
print(name.lower())
# name = "2"
print(name.isdigit())
# name = "a"
print(name.isalpha())
print(name.count("a"))
print(name.replace("g", "k"))
print((name + " ") * 3)

# string slicing

RANDOM_STRING = "this is a random string used for learning purposes"

subString = RANDOM_STRING[0:15:2]  # [start:stop:step]
print("string: ", RANDOM_STRING, "\nsub string: ", subString)
print("reversed string: ", RANDOM_STRING[::-1])

website = "https://google.com"
print(website[slice(8, -4)])

# type casting

x = 1  # integer
y = 2.0  # float
z = "3"  # string

print(int(y))  # this will print 2 not 2.0 because we type casted it as an integer
print(float(x))  # this will print 1.0 not 1 because we type casted it as a float
print(
    int(z) * (float(z) + 1.5)
)  # we cant do arithmetic operations on strings so we have to type cast them to integers or floats

# input

# name = input("what's your name: ")
# age = int(input("how old are you: "))
# height = float(input("how tall are you: "))

print("name: ", name, "\nage: ", age, "yo \nheight: ", height, " Cm")

# useful functions related to numbers

import math

PI = math.pi

print("PI:", PI)
print("round: ", round(PI))
print("ceil: ", math.ceil(PI))
print("floor: ", math.floor(PI))
print("absolute value: ", abs(-99))
print("power: ", pow(2, 2))
print("square root: ", math.sqrt(144))
print(max(1, 3, 2))
print(min(1, 3, 2))

# conditions

# age = int(input("how old are you: "))

if age >= 18 and age > 0 and age < 200:
    print("you are an adult")
elif age < 18 and age > 0 and age < 200:
    print("you are a child")
else:
    print("what in the world is this?")

# logical operators

print(True and True != False or not True)

# loops

name = ""

# while name == "":
#     name = input("what's your name?\nname: ")
# print("Hi!, ", name)

# while True:
#     name = input("what's your name?\nname: ")
#     if name == "":
#         pass
#     else:
#         break

for i in range(10, 25, 2):  # range(start, stop, step)
    print("| ", i, " | ", end="")

print()

for i in "123-456-789":
    if i == "-":
        continue
    print(i, end="")

# lists

food = ["pizza", "spaghetti", "pasta"]
print(food)
food.append("apple")
print(food)
food.remove("spaghetti")
print(food)
food.pop()
print(food)
food.insert(2, "cake")
print(food)
food.sort()
print(food)
food.clear()
print(food)

grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for i in grid:
    for j in i:
        print(j, " ", end="")
    print()

evenSquares = [i * i for i in range(1, 11) if i % 2 == 0]
print(evenSquares)
oddSquares = [i * i if i % 2 != 0 else "not odd" for i in range(1, 11)]
print(oddSquares)

# tuples

student = ("dud", 21, "cool")

print(student.count("dud"))
print(student.index("cool"))

for i in student:
    print(i, "", end="")

if "cool" in student:
    print("\nthis dud is cool")

# sets

fruits = {"apple", "strawberry", "pineapple", "mango", "strawberry"}
vegetables = {"tomato", "potatoes", "apple"}

print(fruits)
fruits.add("papaya")
print(fruits)
fruits.remove("strawberry")
print(fruits)
fruits.update(vegetables)
print(fruits)
print(vegetables.union(fruits))
print(fruits.intersection(vegetables))
print(fruits.difference(vegetables))
fruits.clear()
print(fruits)

#  dictionaries

capitals = {
    "Afghanistan": "Kabul",
    "Albania": "Tirana",
    "Algeria": "Algiers",
    "Andorra": "Andorra la Vella",
    "Angola": "Luanda",
}

print(capitals)
print(capitals["Angola"])
print(capitals.get("Andorra"))
print(capitals.keys())
print(capitals.values())
print(capitals.items())

for key, value in capitals.items():
    print("the capital of ", key, "is ", value)

capitals.update({"Tunisia": "Tunisia"})
print(capitals)
capitals.update({"Albania": "sorry Albania i have to test this"})
print(capitals)
capitals.pop("Albania")
print(capitals)
capitals.clear()
print(capitals)

stringNumbers = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
}

evenSquares = {
    key: value * value for key, value in stringNumbers.items() if value % 2 == 0
}
print(evenSquares)

oddSquaresSquares = {
    key: value * value if value % 2 != 0 else "not odd"
    for key, value in stringNumbers.items()
}
print(oddSquaresSquares)

# indexing

randomString = "this is a random string"
print(randomString[4])
print(randomString[7:].upper())
print(randomString[:5].lower())
print(randomString[-1])
print(randomString[::-1])
print(randomString[:5:-1])
print(randomString[5::-1])

# functions


def mathPower(number, power):
    if power > 0:
        return mathPower(number, power - 1) * number
    else:
        return 1


print(mathPower(2, 5))
print(mathPower(power=2, number=3))


def sum(*args):  # args here is a tuple
    sum = 0
    for i in args:
        sum += i
    return sum


print(sum(1, 2, 3, 4, 5, 6))


def hello(**kwargs):  # kwarg here is a dictionary
    print("Hello,", end="")
    for key in kwargs:
        print(" ", kwargs.get(key), end="")
    print("!")


hello(firstName="Giga", middleName="Ultra", lastName="Chad")


def hello():
    print("hello!")


hi = hello
hi()


def divisor(x):
    def dividend(y):
        return y / x

    return dividend


print(divisor(2)(10))

double = lambda x: x * 2

print(double(2))

# exception handling


def division(numerator, denominator):
    result = 0
    try:
        result = numerator / denominator
    except TypeError as e:
        print(e)
        print("you can't divide stings!")
    except ZeroDivisionError as e:
        print(e)
        print("you can't divide by zero!")
    except Exception as e:
        print(e)
        print("Something went wrong!")
    else:
        print(result)
    finally:
        print("NOTHING CAN STOP ME!")


division(3, "xd")
division(3, 0)
division(9, 3)

# modules

import myModule

myModule.hello()
myModule.bye()

import myModule as module

module.hello()
module.bye()

from myModule import hello, bye

hello()
bye()

from myModule import *

hello()
bye()

# object oriented programming


class Car:
    cars = 0
    wheels = 4  # an attribute with a default value

    def __init__(self, make, module, year, color) -> None:
        self.make = make
        self.module = module
        self.year = year
        self.color = color
        Car.cars += 1

    def moving(self):
        print(self.make, "is moving")

    def notMoving(self):
        print(self.make, "is not moving")


chevy = Car("Chevy", "Corvet", 2021, "Blue")
ford = Car("Ford", "Mustang", 2023, "Red")

print(chevy.make, chevy.module, chevy.year, chevy.color)
chevy.moving()
chevy.notMoving()

print(ford.make, ford.module, ford.year, ford.color)
ford.moving()
ford.notMoving()

print(Car.cars)

from abc import ABC, abstractmethod


class Animal(ABC):
    alive = True

    def __init__(self, name) -> None:
        self.name = name

    def eat(self):
        print(self.name, " is eating")

    @abstractmethod
    def sleep(self):
        pass


class Rabbit(Animal):
    def run(self):
        print(self.name, " is running")

    def sleep(self):
        print(self.name, " is sleeping like a rabbit")


class Fish(Animal):
    def swim(self):
        print(self.name, " is swimming")

    def sleep(self):
        print(self.name, " is sleeping like a fish")


rabbit = Rabbit("rabbit")
fish = Fish("fish")

print(rabbit.alive)
fish.eat()
rabbit.sleep()

fish.swim()
rabbit.run()


class FishAndRabbit(Fish, Rabbit):
    def whatIsThis(self):
        print("i don't know")

    def sleep(self):
        print(self.name, " does not sleep")
        return self


fishAndRabbit = FishAndRabbit("fish and rabbit")

fishAndRabbit.whatIsThis()
fishAndRabbit.swim()
fishAndRabbit.sleep().run()


class Rectangle:
    def __init__(self, width, length) -> None:
        self.width = width
        self.length = length


class Square(Rectangle):
    def __init__(self, width, length) -> None:
        super().__init__(width, length)


# multithreading

import threading
import time


def sleep():
    time.sleep(1)
    print("started sleeping")
    time.sleep(10)
    print("woke up!")


def breath():
    while True:
        time.sleep(1)
        print("breathing")


def dream(dream):
    time.sleep(3)
    print("started dreaming about", dream)
    time.sleep(5)
    print("finished dreaming")


sleepThread = threading.Thread(target=sleep)
sleepThread.start()

breathThread = threading.Thread(target=breath, daemon=True)
breathThread.start()

dreamThread = threading.Thread(target=dream, args=("Mobile Legends",))
dreamThread.start()

print(threading.active_count())
print(threading.enumerate())

sleepThread.join()  # forces the main thread to wait for the calling  function to finish
dreamThread.join()

print("finished!")

# multiprocessing

from multiprocessing import Process, cpu_count


def counter(number, name):
    for i in range(0, number):
        pass
    print(name, "finished counting!")


def main():
    print(
        cpu_count()
    )  # creating more process than cpu_count results in bad performance
    a = Process(target=counter, args=(1000, "A"))
    b = Process(target=counter, args=(500, "B"))
    c = Process(target=counter, args=(500, "C"))
    d = Process(target=counter, args=(10000000000, "D"), daemon=True)

    a.start()
    b.start()
    c.start()
    d.start()

    a.join()
    b.join()
    c.join()


if __name__ == "__main__":
    main()

# multiprocessing is deferent from multi threading because in multi threading the threads are running concurrently while in multiprocessing the processes are running simultaneously
