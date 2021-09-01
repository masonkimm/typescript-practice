// Basic Types
let id: number = 5;

let company: string = 'TSC practice';

let isPublished: boolean = true;

let x: any = 'hello world';

x = 10;

let studentId: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, 2, 'hi', true];

//Tuple
//(order matters)
let person: [number, string, boolean] = [1, 'string', true];
// incorrect due to wrong type at index 2
// let person2: [number, string, boolean] = [1, 'string', 2];
// incorrect due to wrong order of items
// let person3: [number, string, boolean] = [true, 1, 'string'];

let employee: [number, string][];
employee = [
  [1, 'mason'],
  [2, 'Jay'],
  [3, 'enoch'],
];
// incorrect due to wrong type
// let employee2: [number, string][];
// employee2 = [
//   [true, 'mason'],
//   [2, 'Jay'],
//   [3, 'enoch'],
// ];

//union
let productId: string | number;

//either one will work
productId = 22;
// productId = '22';

//Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
// console.log(Direction1.Up);
// console.log(Direction1.Down);
// console.log(Direction1.Right);
// console.log(Direction1.Left);
enum Direction2 {
  Up = 'go straight',
  Down = 'down',
  Left = 'left',
  Right = 'right',
}
// console.log(Direction2.Up);
// console.log(Direction2.Down);
// console.log(Direction2.Right);
// console.log(Direction2.Left);

//Objects
type User = {
  id: number;
  name: string;
};
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: 'John',
};

type User1 = {
  id: number;
  name: string;
};
const user1: User1 = {
  id: 1,
  name: 'John',
};

//Type Assertion
//explicitly telling the complier that we want to treat an entity as a different type

let cid: any = 1;
let customerId = cid as number;

//Functions
function addNum(x: number, y: number): number {
  return x + y;
}
console.log(addNum(1, 2));

//Void
function log(message: string | number): void {
  console.log(message);
}
log(1);
log('hello');

//Interfaces
//(like custom type, specific structure to an object or function) cannot use it with primitives or unions

interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
  // ? = optional symbol
}

const user2: UserInterface = {
  id: 1,
  name: 'John',
};

type Point = number | string;
const p1: Point = 1;

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;

//Classes
