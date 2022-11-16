# Meet in the middle

## Meet in the middle explanation

You want to check the sum of everything

O(N²) is too slow for you so you hire the man in the middle's help.

He tells you there is an epic thing called meet in the middle.

What this does is that it swaps N and 2 around, making it O(2ⁿ).

Ehh heres the code:

```cpp
  sort(arr,arr+v1.size());
  int ans=0;
  for(auto it : v){
    ans+=upper_bound(arr,arr+v1.size(),k-it)-arr;
  }
```
