# Bitmask

## Bitmask explanation

it sounds cool ngl

So what bitmask does is that it manipulates variables and stores them in terms of bits.

wtv heres the code
```cpp
  for (int i = 0; i < 1 << n; ++i) {
    int sum = 0;
    for (int j = 0; j < n; ++j) {
      if (i & (1 << j)) {
        sum += arr[j];
      }
    }
    if (sum <= k) {
      v.push_back(sum);
    }
  }
 ```
