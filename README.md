# typescript-practice

## Documentation

TS for JS - https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

## Basic Types

```typescript
let id: number = 5;
let company: string = 'typeScript';
let isPublished: boolean = true;
let x: any = 'hello world';
let studentId: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, 2, 'hi', true];
```

## Tuple

- order matters

```typescript
let person: [number, string, boolean] = [1, 'string', true];
```

## Union

```typescript
let productId: string | number;

productId = 'lateral';
or;
productId = 22;
```

## Enum

```typescript
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Direction1.Up) = 1;
console.log(Direction1.Left) = 3;

enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}
```

## Objects

```typescript
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
```

## Type Assertion

- explicityly telling the complier to treat an entity as a different type

```typescript
let cid: any = 1;
let customerId = cid as number;
```

## Functions

```typescript
function addNum(x: number, y: number): number {
  return x + y;
}
console.log(addNum(1, 2));
```

## Void

```typescript
function log(message: string | number): void {
  console.log(message);
}
log(1);
log('hello');
```

## Interfaces

- ? = optional symbol

```typescript
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user2: userInterface = {
  id: 1,
  name: 'John',
};

type Point = number | string;
const p1: Point = 1;

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => {
  x + y;
};
```
