// primitive types

let myNumber: number;

function stringPlusNumber(
  stringNumber: string = "0" /*<- 0 is the default value*/,
  number: number = 0,
  toDisplay: boolean = true
): number {
  let result: number;
  switch (stringNumber) {
    case "0":
      result = 0 + number;
      break;
    case "1":
      result = 1 + number;
      break;
    case "2":
      result = 2 + number;
      break;
    case "3":
      result = 3 + number;
      break;
    case "4":
      result = 4 + number;
      break;
    case "5":
      result = 5 + number;
      break;
    case "6":
      result = 6 + number;
      break;
    case "7":
      result = 7 + number;
      break;
    case "8":
      result = 8 + number;
      break;
    case "9":
      result = 9 + number;
      break;

    default:
      console.log("thats not a valid number");
      result = 0;
      break;
  }
  if (toDisplay) {
    console.log(`${stringNumber} + ${number}  =  ${result}`);
  }
  return result;
}

myNumber = stringPlusNumber("6", 4);

console.log(`myNumber = stringPlusNumber("6", 4); => ${myNumber}`);

// created types

type User = {
  readonly _id: string;
  name: string;
  age: number;
  isMale: boolean;
};

type CreditCard = {
  bank: string;
  number: number;
  isActive: boolean;
};

type RichUser = User &
  CreditCard & {
    isSmart: boolean;
  };

function createRichUser(
  user: User,
  creditCard: CreditCard,
  isSmart: boolean
): RichUser {
  return {
    _id: user._id,
    age: user.age,
    bank: creditCard.bank,
    isActive: creditCard.isActive,
    isMale: user.isMale,
    isSmart: isSmart,
    name: user.name,
    number: creditCard.number,
  };
}

let myUser: User = { _id: "_id", name: "myUser", age: 18, isMale: true };
let myUserCreditCard: CreditCard = {
  bank: "bank",
  isActive: true,
  number: 999999999999999999,
};

export {};
