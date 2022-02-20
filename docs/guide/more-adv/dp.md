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
### Top down DP
Top down dynamic programming is a speedup of naive recursive functions, by preventing the need of recalculating the same function multiple times. This involves memoisation, which is the storing of previous answers.
Top down Fibo algorithm:
```cpp{1,3,5}
long long memo[100005] //All initially set to -1
long long sum(long long n) {
  if (memo[n] != -1) return memo[n];
  if (n <= 1) {memo[n] = n; return n;}
  memo[n] = sum(n - 1) + sum(n - 2);
  return memo[n];
}
```
The states are stored in memo[], and the transition is memo[n] = sum(n-1) + sum[n-2]. The base cases are when n <= 1, memo[n] = 1;
While this form of DP may be more intuitive sometimes, it usually takes up more memory.
### Bottom up DP
Bottom up dynamic programming is where you calculate all states leading up to the state that you are searching for.
Top down Fibo algorithm:
```cpp
long long memo[n];
memo[0] = 0, memo[1] = 1;
for (long long i = 2; i < n; i++) {
  memo[i] = memo[i-1] + memo[i-2];
}
```
The states are stored in memo[n], the base cases are memo[0] and memo[1], and the transition is memo[i] = memo[i-1] + memo[i-2].
### Conclusion
The 2 forms of DP have their own advntages. While bottom-up DP is usually more intuitive, some question require the use of top-down DP. Regardless, both forms of DP help to speed up programs. In the future writeups, we will look at some common DP algorithms, as well as their applications.
