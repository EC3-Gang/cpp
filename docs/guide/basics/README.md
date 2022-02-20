---
lang: en-us
title: The Basics
---

# The basics of the basics of C++ (by Darryl)

Apparently we're supposed to write experience or something but I just learnt `cpp` a week ago so here is what I know.

## Data Types

### Basic Data Types

| Data Type | Size (in bytes) | Use                                               | Example            |
| --------- | --------------- | ------------------------------------------------- | ------------------ |
| `int`     | 4               | Storing numbers (-2 147 483 648 to 2 147 483 647) | 12 442             |
| `float`   | 4               | Storing decimal numbers (up to 7 d.p.)            | 5.63562            |
| `double`  | 8               | Storing decimal numbers (up to 15 d.p.)           | 3.1415926535879732 |
| `bool`    | 1               | Storing `true` or `false` values                  | `true`, `false`    |
| `char`    | 1               | Storing a single character                        | `'D'`, `'$'`       |
| `string`  | variable        | Storing multi-character text                      | `'hi mom'`         |

### Data Type Modifiers

Numeric data types (`int` and `double`) can be modified with:

- `short`
- `long` (or even `long long`)
- `signed`
- `unsigned`

which give a variety of ranges of the same numerical datatype.

| Modified Datatype                        | Size (in bytes) | Range                           |
| ---------------------------------------- | --------------- | ------------------------------- |
| `short int`                              | 2               | -32 768 to 32 767               |
| `unsigned short int`                     | 2               | 0 to 65 535                     |
| `unsigned int`                           | 4               | 0 to 4 294 967 295              |
| `long int` (or just `long`)              | 4               | -2 147 483 648 to 2 147 483 647 |
| `unsigned long int` (or `unsigned long`) | 4               | 0 to 4 294 967 295              |
| `long long int` (or `long long`)         | 8               | $-(2^{63})$ to $2^{63} - 1$     |
| `unsigned long long int`                 | 8               | 0 to 18 446 744 073 709 551 615 |
| `long double`                            | 12              | -                               |

## Basic Programs

### Hello World

```cpp
#include <iostream>
using namespace std;
int main() {
  cout<< "Hello World";
  return 0;
}
```

This program will print the text "Hello World".

1. `#include` will include certain header files into a program. This will allow us to use whatever is in, in this case, `iostream`.
2. `using namespace std` allows us to use the standard library, which comes in a namespace. Of course, you can forgo this and use `std::` when you want to use it. However, it is better to define the namespace.
3. `int main() {}` creates a function. The name of this function is `main`. The code is written in `{}`.
4. `cout` prints, or writes, a certain text to the standard output.
5. In C++, you must end all statements with `;`.
