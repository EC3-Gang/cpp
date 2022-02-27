---
lang: en-us
title: The Basics
---

# The basics of the basics of C++ (by Darryl)

Ok, so essentially, these are the things you must take note of when starting out with `C++`. I will first cover the data types.

## The Structure of a C++ Program

```cpp
#include <iostream>
using namespace std;
int main() {
  cout << "Hello World";
}
```

This is a basic C++ program which prints "Hello World" to the console.

It is made up of three essential parts:

1. `#include`: It includes the necessary header files for functions used in the program.
2. `using namespace std`: Includes that standard library of functions.
3. `int main() {}`: The main function, where all your code should go.

Notice that we use `cout` for printing. The opposite of that, `cin >> variable`,
is for receiving input to a variable, however that variable must be defined prior to the statement.

## Data Types

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

Numeric data types (`int` and `double`) can be modified with:

- `short`
- `long` (or even `long long`)
- `signed`
- `unsigned`

which give a variety of ranges of the same numerical datatype.

Note that the default modified datatype is `int`.

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

## Control Flow

### If Statements

For leaving decisions to your computer.

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

Notice that the conditions are surrounded by **parentheses**
and the following code to be executed is in curly braces.

If you know how programming works, you can also use `else if` for multiple conditions.

#### Logical Operators

| Op.    | Means | True Example                 | False Example                |
| ------ | ----- | ---------------------------- | ---------------------------- |
| `&&`   | "and" | `(5 > 3 && 2 < 4)`           | `(3 > 5 && 2 < 4)`           |
| `\|\|` | "or"  | `('s' == 's' or 't' == 'u')` | `('s' == 't' or 't' == 'u')` |
| `!`    | "not" | `(!(5 < 3))`                 | `(!('a' == 'a'))`            |

#### Comparison Operators

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

That's it.

```cpp
#include <iostream>
using namespace std;
int main() {
  //  initialize, cond., inc./dec.
  for (int i = 1; i <= 5; i++) { cout << i << ' '; }
  for (int i = 4; i > 0; i--) { cout << i << ' '; }
}
```

#### While Loop

That's also it.

```cpp
#include <iostream>
using namespace std;
int main() {
  int i = 10;
  while (i > 0) { // put condition in parens.
    cout << i << ' ';
    i--;
  }
}
```

## Functions

```cpp
int add(int a, int b, int c) {
  return a + b + c;
}
```

The return type of the function is always specified,
followed by its parameters (with their specific types).
