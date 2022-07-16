---
lang: en-us
title: Greedy Algorithms
---

# Greedy Algorithms

## Greedy Algorithms explained

Greedy algorithms is not caring about overall optimal solution, but rather the optimal solution in one particular case (boy am i bad at explaining)

Steps of greedy algorithms are
1. Be lazy
2. Search some lazy algorithms
3. Learn greedy algorithms

Basically all you have to do is be lazy

Example:

Theres a tree, try to make the biggest number out of all the elements in the tree. You can assume that all bottom elements are linked to any above element (what am i saying)
Input format:


Line 1: A single interger N ($0$ <= $N$ <= $100$) to determine the number of sub-groups in the tree


Lines 2 - $N+1$: A single interger K ($0$ <= $K$ <= $100$) which is the number of elements in that sub-group of the tree


Output format:


A single interger, which is the biggest sum of each elements in each branch of the tree


Sample input:

```
3
2 4 5
3 1 2 3 
2 5 9
```
    
Sample output:

```
17
```
    
This is because I took the biggest elements in each tree and added them together
```cpp
#include <bits/stdc++.h>
using namespace std;
int main()
{
    int n;
    cin>>n;
    int x[100];
    int sum=0;
    for(int i=0;i<n;++i){
         int k;
         cin>>k;
         int maxi=0;
         for(int j=0;j<k;++j){
            cin>>x[j];
            maxi=max(maxi,x[j]);
         }
         sum+=maxi;
         maxi=0;
    }
    cout<<sum;
}
```

Yes. Essentially this code just gets the maximum of each branch and adds them into one collective sum.
