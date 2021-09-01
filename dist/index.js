"use strict";
// Basic Types
let id = 5;
let company = 'TSC practice';
let isPublished = true;
let x = 'hello world';
x = 10;
let studentId = [1, 2, 3, 4, 5];
let arr = [1, 2, 'hi', true];
//Tuple
//(order matters)
let person = [1, 'string', true];
// incorrect due to wrong type at index 2
// let person2: [number, string, boolean] = [1, 'string', 2];
// incorrect due to wrong order of items
// let person3: [number, string, boolean] = [true, 1, 'string'];
let employee;
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
let productId;
//either one will work
productId = 22;
// productId = '22';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
// console.log(Direction1.Up);
// console.log(Direction1.Down);
// console.log(Direction1.Right);
// console.log(Direction1.Left);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "go straight";
    Direction2["Down"] = "down";
    Direction2["Left"] = "left";
    Direction2["Right"] = "right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John',
};
const user1 = {
    id: 1,
    name: 'John',
};
//Type Assertion
//explicitly telling the complier that we want to treat an entity as a different type
let cid = 1;
let customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
//Void
function log(message) {
    console.log(message);
}
log(1);
log('hello');
const user2 = {
    id: 1,
    name: 'John',
};
const p1 = 1;
const add = (x, y) => x + y;
//Classes
