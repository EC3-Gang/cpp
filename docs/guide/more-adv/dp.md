# Dynamic programming
## Dynamic programming explained
Dynamic progamming is a technique used to the vast majority of competitive programming, usually used to speed recursive or naive algorithms up. The simplest form of dynamic programming is to find fibonacci numbers. Dynamic programming can be applied when a problem can be solved using smaller versions of the same problem.
Dynamic programming has 3 parts: A state, a transition and a base case.
We shall demonstrate the use of a recursive method, followed by 2 types of dynamic programming, as well as the different parts.
Naive recursive method:
```cpp
long long sum(long long n) {
  if (n <= 1) return n;
  return sum(n - 1) + sum(n - 2);
}
```
While this method works, it is far too slow and may check multiple numbers multiple times. At n = 5, sum(2) is recalculated 3 times.
##Top down DP
Top down dynamic programming is a speedup of naive recursive functions, by preventing the need of recalculating the same function multiple times. This involves memoisation, which is the storing of previous answers.
Top down Fibo algorithm:
```cpp{1, 3, 5}
long long memo[100005] //All initially set to -1
long long sum(long long n) {
  if (memo[n] != -1) return memo[n];
  if (n <= 1) return n;
  memo[n] = sum(n - 1) + sum(n - 2)
  return memo[n];
}
```
