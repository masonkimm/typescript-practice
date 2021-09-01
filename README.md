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
