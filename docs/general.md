***

lang: en-US
title: General Tips
-------------------

## General Tips

::: danger WHAT NOT TO DO AT ALL COSTS
Before I start, I thought that you should know that there are a few things that you should avoid at all costs when doing Competitve Programming.

1.  Using Github Copilot or any other AI autocomplete assistants. You will be screamed at by certain contributors if you do.

2.  Do NOT share your code during a contest with other contestants during the duration of the contest, this could lead to disqualification for LIFE.

3.  Beware of using things like "endl" or "ends" during C++ contests as some CP websites do not allow that.

4.  Instead of using "or", substitute it with "||" as "or" might not work and it will minimise troublesome situations

5.  You are allowed to refer to algorithm codes that you already wrote beforehand but definitely NOT from other people/websites
    :::

### Fast Input/Output

#### Option 1: Use FastIO

This is if you use `cin`/`cout`. Include the following two lines at the top of your code:

```cpp
ios::sync_with_stdio(false);
cin.tie(nullptr);
```

However, do note that if you include `ios::sync_with_stdio(false)`,
then mixing C (`scanf`/`printf`) and C++ (`cin`, `cout`) style I/O
may produce unexpected results.

The upside is that both `cin`/`cout` become faster.
Including `cin.tie(nullptr)` will reduce the runtime
if you are using only `cin` and `cout`.

#### Option 2: Use `scanf`/`printf`

Using `scanf` and `printf` from the C STL will decrease your runtime. Example:

```cpp
#include <stdio.h>
using namespace std;

int main() {
  int a;
  printf("Enter an integer: ");
  scanf("%d", &a);
  printf("Number: %d", a);
}
```

### Debug Ouput

Debug output should be written to `std::cerr` (stderr), not `std::cout` (stdout)

### `std::endl`

Don't use `endl`. AVOID AT ALL COSTS.

`std::endl` flushes the buffer and causes a spike in the runtime (resulting in certain TLEs). Instead, use `\n` which just send the output to the next line.

If you're used to typing `endl` (like I am), you can always use `#define endl "\n"`.
Read this [SO post](https://stackoverflow.com/a/35583210) for more info.
