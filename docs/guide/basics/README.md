---
lang: en-us
title: The Basics
---

# syntax

syntax is the most essential to grasp to write a c++ program. here is an overview.

## structure

```cpp
#include <iostream>
using namespace std;
int main() {
  cout << "Hello World";
}
```

this is a basic C++ program which prints "Hello World" to the console.

It is made up of three essential parts:

1. `#include`: includes the necessary header files for functions used in the program.
2. `using namespace std`: includes the standard library of c++ functions.
3. `int main() {}`: the main function, where all driver code should go.

`cout` is for standard output (i.e. "printing"), and `cin` 
is for receiving input to a variable defined earlier. 

## datatypes

variables can be thought of as 'containers' for values, that can be changed and reused throughout a program.
in c++, variables take one of many datatypes, shown below.

### Basic Data Types

| Data Type | Size (in bytes) | Stores                                        | Example              |
| --------- | --------------- | --------------------------------------------- | -------------------- |
| `int`     | $4$             | Numbers ($-2 147 483 648$ to $2 147 483 647$) | $12 442$             |
| `float`   | $4$             | Decimal numbers (up to $7$ d.p.)              | $5.63562$            |
| `double`  | $8$             | Decimal numbers (up to $15$ d.p.)             | $3.1415926535879732$ |
| `bool`    | $1$             | `true` or `false` values                      | `true`, `false`      |
| `char`    | $1$             | A single character                            | `'D'`, `'$'`         |
| `string`  | variable        | Multi-character text                          | `'hi mom'`           |

### Data Type Modifiers
these are most commonly used for numeric datatypes (`int` and `double`),
to resize their limits according to the program's requirements.

the default modified datatype is `int`.

| Modified Datatype    | Size (in bytes) | Range                               |
| -------------------- | --------------- | ----------------------------------- |
| `short`              | $2$             | $-32 768$ to $32 767$               |
| `unsigned short`     | $2$             | $0$ to $65 535$                     |
| `unsigned`           | $4$             | $0$ to $4 294 967 295$              |
| `long`               | $4$             | $-2 147 483 648$ to $2 147 483 647$ |
| `unsigned long`      | $4$             | $0$ to $4 294 967 295$              |
| `long long`          | $8$             | $-2^{63}$ to $2^{63} - 1$           |
| `unsigned long long` | $8$             | $0$ to $18 446 744 073 709 551 615$ |
| `long double`        | $12$            | -                                   |

## control flow
a program can include logical statements, that control how the program behaves in differing conditions.

### if statements

these can be thought of as asking yes/no questions to the computer.

if the answer is 'yes', something would happen; if 'no', something **else** would happen.

below is code that invites the user to a drink if 18 and over, or else denies access.

```cpp
#include <iostream>
using namespace std;
int main() {
  int a;
  cout << "enter your age: ";
  cin >> a;

  if (a < 18) { cout << "access denied"; }
  else { cout << "have a drink!"; }
}
```

conditions in if-statements are surrounded by **parentheses**
and the following code to be executed is in curly braces.

multiple conditions can be expressed with `else if`:
```cpp
#include <iostream>
using namespace std;
int main() {
  int a;
  cout << "enter your age: ";
  cin >> a;

  if (a < 18) { cout << "you cannot drink nor smoke."; }
	else if (a < 21) { cout << "you can drink, but not smoke."; }
  else { cout << "you can do both! welcome to adulthood!"; }
}
```

#### Logical Operators
if multiple conditions are to be satisfied, the following can be used. 

| Op.    | Means | True Example                 | False Example                |
| ------ | ----- | ---------------------------- | ---------------------------- |
| `&&`   | "and" | `(5 > 3 && 2 < 4)`           | `(3 > 5 && 2 < 4)`           |
| `\|\|` | "or"  | `('s' == 's' or 't' == 'u')` | `('s' == 't' or 't' == 'u')` |
| `!`    | "not" | `(!(5 < 3))`                 | `(!('a' == 'a'))`            |

#### Comparison Operators
these are used inside conditions to compare values to one another, resulting in `true`/`false` return values.

| Op.  | Means                       | True Example |
| ---- | --------------------------- | ------------ |
| `==` | is equal to                 | `(5 == 5)`   |
| `!=` | is not equal to             | `(5 != 3)`   |
| `>`  | is greater than             | `(5 > 3)`    |
| `>=` | is greater than or equal to | `(5 >= 5)`   |
| `<`  | is smaller than             | `(3 < 5)`    |
| `<=` | is smaller than or equal to | `(5 <= 5)`   |

### Loops

#### For Loop

say you wanted to repeat a block of code some number of times.
writing the same block of code that many times would be tiresome, and it gets worse if the number of times to repeat it is determined by the user.

we can use for loops instead! a for-loop contains these three parts

1. initialisation: initialise the counter variable to be used
2. condition: loop as long as the condition is true
3. increment/decrement: increment/decrement variables with every run of the loop

any of these parts can be ommited.

```cpp
#include <iostream>
using namespace std;
int main() {
  //  initialize, cond., inc./dec.
	//  output: 1 2 3 4 5 
  for (int i = 1; i <= 5; i++) { cout << i << ' '; }
	//  output: 4 3 2 1
  for (int i = 4; i > 0; i--) { cout << i << ' '; }
}
```

#### While Loop
if you didn't have a certain number of times the loop should run, a loop can still run as long as certain condition(s) hold true.

the block of code inside the loop will repeat as long as the condition is true.

```cpp
#include <iostream>
using namespace std;
int main() {
  int i = 10;
  while (i > 0) { // put condition in parens.
    cout << i << ' ';
    i--;
  }
	// output: 10 9 8 7 6 5 4 3 2 1
}
```

## Functions 
functions define a block of code to be reused throughout the program at different junctures.

you can think of these as variables but for blocks of code.

```cpp
#include <bits/stdc++.h>
using namespace std;

// function name, (parameters)
int sum(int a, int b, int c) {
	return a + b + c;
}

int main() {
	cout << sum(1, 2, 3);
	// output: 6
}
```

normally, a function is expected to return a certain value after the operations inside have been completed. these values take the c++ datatypes we've seen before:

1. `int` function

```cpp
int add(int a, int b, int c) {
  return a + b + c;
}
```

2. `void` function

this function returns nothing, and is normally used to modify existing variables.

```cpp
void addAndPrint(int a, int b, int c) {
  cout << a + b + c;
}

int main() { addAndPrint(1, 2, 3); }
```

3. `string` function

returns a string.

```cpp
string add(string a, string b, string c) {
  return a + b + c;
}

int main() {
	cout << add("ab", "cd", "ef");
	// output: abcdef
}
```

4. `bool` function

returns a boolean value: `true` or `false`.

```cpp
bool check(int a, int b, int c) {
  if (a + b > c) return true;
  return false;
}
```

note: _the_ `else` _keyword isn't needed here, because when_ `return` _is called, the function ends, ignoring everything else after it._

alternatively,
```cpp
int add(int a, int b, int c) {
  return a + b > c;
}
```

note: this function can still produce `true` or `false` results depending on the values of `a`, `b` and `c`.
