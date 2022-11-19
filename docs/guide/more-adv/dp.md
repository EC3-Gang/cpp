# Dynamic programming

<Toc />

## Dynamic programming explained

Dynamic programming is a technique used to the vast majority of competitive programming,
usually used to speed recursive or naive algorithms up.
It can be applied when a problem can be solved using smaller versions of the same problem.

Dynamic programming has 3 parts: a state, a transition and a base case.

The simplest example often used to explain dynamic programming is to find Fibonacci numbers.
We shall demonstrate the use of a recursive method, followed by 2 types of dynamic programming, as well as the different parts.

Naive recursive method (TLEs):

```cpp
long long sum(long long n) {
  if (n <= 1)
    return n;
  return sum(n - 1) + sum(n - 2);
}
```

While this method works, it is far too slow and may check multiple numbers multiple times.
At $n = 5$, $\text{sum}(n)$ is recalculated 3 times.

### Top-down DP

Top-down dynamic programming is a speedup of naive recursive functions, by preventing the need of recalculating the same function multiple times.
This involves memoisation, which is the storing of previous solutions.

Top-down Fibonacci algorithm:

```cpp{1,3,5}
long long memo[100005]; // All initially set to -1
long long sum(long long n) {
  if (memo[n] != -1) return memo[n];
  if (n <= 1) { memo[n] = n; return n; }
  memo[n] = sum(n - 1) + sum(n - 2);
  return memo[n];
}
```

The states are stored in $\text{memo}\[]$, and the transition is $\text{memo}\[n] = \text{sum}\[n - 1] + \text{sum}\[n - 2]$. The base cases are when $n \leq 1$, $\text{memo}\[n] = n$.

While this form of DP may be more intuitive sometimes, it usually takes up more memory.

### Bottom up DP

Bottom-up dynamic programming is where you calculate all states leading up to the state that you are searching for.

Bottom-up Fibonacci algorithm:

```cpp
long long memo[n];
memo[0] = 0, memo[1] = 1;
for (long long i = 2; i < n; i++) {
  memo[i] = memo[i - 1] + memo[i - 2];
}
```

The states are stored in $\text{memo}\[n]$, the base cases are $\text{memo}\[0]$ and $\text{memo}\[1]$, and the transition is $\text{memo}\[i] = \text{memo}\[i - 1] + \text{memo}\[i - 2]$.

### Conclusion

The 2 forms of DP have their own advantages.
While bottom-up DP is usually more intuitive, some questions require the use of top-down DP.
Regardless, both forms of DP help to speed up programs.

## Common DP algorithms

### Prefix/suffix sum

#### Introduction

The objective of this form of dynamic programming is to be able to find the
sum of all elements over a given range in an array. Usually, the naive code
would run in $\mathcal{O}(N)$ time for each query for a range sum:

```cpp
long long arr[n], sum = 0;
for (long long i = lb; i <= ub; i++) {
  sum += arr[i];
}
```

While this method may be fast to find the range sum for 1 query,
if there are multiple queries, the algorithm would run in $\mathcal{O}(NQ)$ in
the worst case, where $Q$ is the number of queries.

#### Precomputation

Precomputation is the act of making calculations prior to the actual query.
While some of this calculations may not be used, having a set of numbers
to refer to is much faster than just recalculating each time, sort of
like memoisation. For the prefix sum problem, notice than the sum of
a range is equivalent to the sum of all numbers leading up to the end,
minus the sum of all numbers leading up to the front of the range.

Hence, we can store the sums as so:

```cpp
long long arr[n], prefix[n];
for (long long i = 0; i < n; i++) {
  if (!i)
    prefix[i] = arr[i];
  else
    prefix[i] = arr[i] + prefix[i - 1];
}
long long sum = prefix[ub] - prefix[lb - 1];
```

While this method may seem too slow, it actually shortens down
the time for each query to be $\mathcal{O}(1)$! So, the time
complexity of the program overall would be $\mathcal{O}(N + Q)$.

#### Conclusion

Prefix sums is a good way of keeping track of range sums.
While prefix sums are a good way of handling querys on range sums,
it is unable to handle updates. In the chapter on trees, we will touch on this.
