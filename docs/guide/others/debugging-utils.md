# Debugging Resources

## Standard Error Stream (`stderr`)
Most OJs (iirc) don't read the error stream, so you can output whatever you want into `stderr`, and it most likely wouldn't affect whether you AC the question or not.

::: warning
Printing too much output to `stderr` can result in a TLE
:::

### Function for outputting to `stderr`
```cpp
#include <bits/stdc++.h>
using namespace std;
template <typename T>
inline void dbg(T outVar) {
	cerr << outVar << '\n';
}
template <typename T, typename... S>
inline void dbg(T outVar, S... args) {
	cerr << outVar << ' ';
	out(args...);
}

int main() {
	dbg("Hello World!"); // this gets printed to stderr
}
```

## Debugging Macro
_psssst this is taken from the USACO guide_

```cpp
#include <iostream>
using namespace std;

#define dbg(v)                                                                 \
	cout << "Line(" << __LINE__ << ") -> " << #v << " = " << (v) << endl;

int x = 10; // pretend this variable is important

int main() {
	dbg(x); // Line(10) -> x = 10
	x = 5000;
	dbg(x); // Line(12) -> x = 5000
}
```

## Debugging STL Data Structures
You can use [this debugging template](https://gist.github.com/SansPapyrus683/61b65d4d7ec223b48ebf5c3bb382ba8d) which allows you to print most built-in data structures like `vector` or `pair`.

## Debuggers
- [Debugging C++ in VSCode](https://code.visualstudio.com/docs/cpp/cpp-debug)
- [Debugging in CLion](https://www.jetbrains.com/help/clion/debugging-code.html)
- [GDB](https://www.sourceware.org/gdb/documentation/)