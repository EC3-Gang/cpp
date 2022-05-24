---
lang: en-us
title: Line Sweep / Sliding Window
---

# line sweep

Yes very cool. This can be considered a type of greedy algorithm if you want

heres a code for reference:
```cpp
#include <bits/stdc++.h>
using namespace std;
int main()
{
  int n,s;
  cin>>n>>s;
  int a[n];
  long long sum=0;
  for(int i=0;i<n;++i){
    cin>>a[i];
    sum+=a[i];
  }
  int left=0,right=n-1;
  int maxi=0;
  while(right-left!=0){
    if(sum<=s) maxi=max(maxi,right-left+1);
    if(a[left]<a[right]){
      sum-=a[right];
      right--;
    }
    else if(a[right]<a[left]){
      sum-=a[left];
      left++;
    }
    else left++;
  }
  cout<<maxi;
}
```

this code works for the sample test case of [catfight](https://codebreaker.xyz/problem/catfight).

abridged problem statement:

rar the cat can fight N cats and has P power. given N, P and an array of N elements, find how many adjacent cats rar the cat can defeat.

these are its steps:
  1. input (if you want explanation call 1800-221 4444)
  2. find total sum
  3. loop N times, and remove the bigger end (if left>right left++ else if left<right right-- else left++)
  4. make sure to remove the value of the removed end from the sum too
  5. yeah pretty much done
  
halp i cant explain
