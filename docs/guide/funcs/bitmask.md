---
lang: en-us
title: Binary Search
---

# Bitmask

## Bitmask explanation

heh it sounds cool ngl

The definition of bitmask is storing data as bits, rather than your usual data types.

How bitmask works is:

1. loop through 0 to 1<<n
2. loop through all n
3. check if i&(1<<j), if so add arr[j] to the sum
4. if sum <=k, store it somewhere

Here is the full code:
```cpp
  for (int i = 0; i < 1 << n; ++i) {
    int sum = 0;
    for (int j = 0; j < n; ++j) {
      if (i & (1 << j)) {
        sum += a[j];
      }
    }
    if (sum <= k) {
      v.push_back(sum);
    }
  }
  ```
