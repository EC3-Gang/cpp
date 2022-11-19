---
lang: en-US
title: Sructs and Classes
---

# Structs and Classes

## Structs

Structs are a way to group several related variables into one "datatype".
Each variable in the struct is known as a **member** of the struct.

For example, this is a struct.

Pair but not a pair

```cpp
struct {
  int x, y;
  char c;
} name;
```

# This initialises a struct called name. You can now input this struct

```cpp
struct {
  int x, y;
  char c;
} name;
```

This initialises a struct, `name`.
Inputting a struct is based on its members:

```cpp
std::cin >> name.x >> name.y >> name.c;
```

or

```cpp
scanf("%d%d%c", &name.x, &name.y, &name.c);
```

# You can also initialise a structs as a data structure (what am i saying it is a data structure)

```cpp
scanf("%d %d %c", &name.x, &name.y, &name.c);
```

Since a struct acts like a data type by itself, variables of that struct can be initialised:

```cpp
int main() {
  // single variable
  name name1 = {0, 0, 'c'};
  // array
  // or an array of names!
  name s[n];
}
```

### Classes

# idk bro go ask someone else

## Classes

A class is the building block of OOP in C++.
While not widely used within the realm of CP, they are still important in other fields.

### What are they?

Like structs, classes contain various member variables, but also contain member functions: functions specifically tailored to that datatype.

```cpp
class Cca {
public:
  string name;
  int members;

  // printName is not defined inside class definition
  void printName();

  // printMembers is defined inside the class definition
  void printMembers() { cout << "Number of members: " << members; }
};

// definition of member functions using scope resolution operator ::
void Cca::printName() { cout << "CCA: " << name; }
```

More advanced concepts for classes, such as constructors and destructors, appear almost nowhere within competitive programming.
Instead, you can read about them [here](https://www.geeksforgeeks.org/c-classes-and-objects/).
