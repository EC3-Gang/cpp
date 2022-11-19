---

lang: en-us
title: Two pointers
---

# Line sweep/sliding window

## explanation

i dont even know in which situation you need this BUT YOU DO OKAY

Yes theres steps too.

1.  Make 2 pointers, left and right
2.  assign each of them to index 0 and index n-1
3.  if arr\[left] (> or <) arr\[right] do smth

heres a piece of code demonstrating this:

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
  int n, s;
  cin >> n >> s;
  int a[n];
  long long sum = 0;
  for (int i = 0; i < n; ++i) {
    cin >> a[i];
    sum += a[i];
  }
  int left = 0, right = n - 1;
  int maxi = 0;
  while (right - left != 0) {
    if (sum <= s)
      maxi = max(maxi, right - left + 1);
    if (a[left] < a[right]) {
      sum -= a[right];
      right--;
    } else if (a[right] < a[left]) {
      sum -= a[left];
      left++;
    } else
      left++;
  }
  cout << maxi;
}
```

note that this is not the answer to [catfight](https://codebreaker.xyz/problem/catfight) as this only works for the sample test case
