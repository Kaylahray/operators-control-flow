# Question 1: List the symbols for each of the below JavaScript operators

**a. Arithmetic Operators**

- +, /, %, -, \*, \*\*.

**b. Assignment Operators**

- =, +=, -=, \*=, /=, %=, ++, --.\

**c. Comparison Operators**

- <, >, <=, >=, ==, ===, !==, !=.

**d. Logical Operators**

- &&
- ||
- !

**e. Bitwise Operators**

- &, |, ~, ^, <<, >>.

# Question 2: For each javascript operator, write two (2) examples.

**Example of Arithmetic operators**

```javascript
// Using the + operator
let a = 3;
let b = 5;
console.log(a + b); //output to the console is 8.

//  Using the modulo ( % ) operator.
console.log(b % a); //output to the console is 2.
```

**Example of Assignment operators**

```javascript
// Using the = operator
let a = 3;
let b = a;
console.log(b); //Here b is assigned to the value of a, hence output to console is 3.

//  Using the += operator.
let c = 4;
let d = 5;
c += d;
console.log(c); //output to the console is 9.
```

**Example of comparison operators**

```javascript
// Using the >= operator
let x = 3;
let y = 7;
console.log(x >= y); // output to console is false because x is not greater or equal to y.

//  Using the strict equality operator ( === ).
let c = 5;
let d = "5";
console.log(c === d); //output to the console is false because meanwhile having the same values they have different datatypes.
```

**Example of logical operators**

```javascript
// Using the && operator
let a = true;
let b = false;
let c = a && b;
console.log(c); //output to console is false because only one of the operand is true.

//  Using the || operator.
let c = true;
let d = false;
let e = c || d;
console.log(e); //output to the console is true even if only one operand id true.
```

**Example of Bitwise operators**

```javascript
// Using the | operator
// 1 = 00000001
// 2 = 00000010
console.log(1 | 2); // Using the Bitwise OR operator, output to console is 3 that is 00000011.

//  Using the & operator.
console.log(1 & 2); //Using the Bitwise AND operator, output to the console is 0 that is 00000000.
```

# Question 4: What is the result when the following program is executed?

```javascript
for (let i = 1; i < 20; i += 7) {
  console.log(i);
}
```

_Answer_: The output to the console is:

```
1
8
15
```
