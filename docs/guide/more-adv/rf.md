# Recursive functions

Recursive functions are when the function is called from within the same function.

Pseudocode:

```js
function fn(a, b) {
  if (a <= b) {
    console.log(a);
    return fn(a + 1, b);
  }
}
fn(1, 10);
```

Output:

```
1
2
3
4
5
6
7
8
9
10
```

## Uses in CP

Well...not a lot, to be honest. It TLEs when the there are too many recursions, but usually works for smaller inputs.

Example of a recursive function in CP (calculates the Fibonacci sequence):

```cpp{7-10}
#include <iostream>
#define endl "\n"
#define ll long long

using namespace std;

ll sum(ll n) {
  if (n <= 1) return n;
  return sum(n - 1) + sum(n - 2);
}

int main() {
  ll n;
  cin >> n;
  for (int i = 0; i < n + 1; i++) cout << sum(i) << endl;
}
```

_The highlighted part is the recursive function._

The above solution was written for [this problem](https://codebreaker.xyz/problem/fibo), but TLE'd on one of the last test cases.
