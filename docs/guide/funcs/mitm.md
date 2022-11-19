# Meet in the middle

## Meet in the middle explanation

You want to check the sum of everything

$\mathcal{O(N^2)}$ is too slow for you so you hire the man in the middle's help.

He tells you there is an epic thing called meet in the middle.

What this does is that it swaps $\mathcal{N}$ and $\mathcal{2}$ around, making it $\mathcal{O(2^n)}$.

Ehh heres the code:

```cpp
sort(arr, arr + v1.size());
int ans = 0;
for (auto it : v) {
  ans += upper_bound(arr, arr + v1.size(), k - it) - arr;
}
```
