---
lang: en-US
title: General Tips and whatnot
---
# General Tips
::: danger WHAT NOT TO DO AT ALL COSTS
Before I start, I thought that you should know that there are a few things that you should avoid at all costs when doing Competitve Programming.
1. Using Github Copilot or any other AI autocomplete assistants. You will be screamed at by certain contributors if you do.
:::

## How to increase the speed of your program
### Option 1: Use FastIO
This is if you use `cin`/`cout`. Include the following two lines at the top of your code:
```cpp
ios::sync_with_stdio(false);
cin.tie(nullptr);
```
However, do note that if you include `ios::sync_with_stdio(false)`, then mixing C (`scanf`/`printf`) and C++ (`cin`, `cout`) style I/O may produce unexpected results. The upside is that both `cin`/`cout` become faster. Including `cin.tie(nullptr)` will reduce the runtime if you are interleaving `cin` and `cout`.
