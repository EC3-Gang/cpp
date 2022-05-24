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
3. Learn greedy algorithms lmao
jkjkjk

Basically all you have to do is be lazy

Ok heres an example cus idk how to explain

Im gonna make a question right now

uhh

Theres a tree, try to make the biggest number out of all the elements in the tree. You can assume that all bottom elements are linked to any above element (what am i saying)
Input format:


Line 1: A single interger N (0<=N<=100) to determine the number of sub-groups in the tree


Lines 2-N+1: A single interger K (0<=K<=100) which is the number of elements in that sub-group of the tree


Output format:


A single interger, which is the biggest sum of each elements in each branch of the tree


Sample input:

    3
    
    2 4 5
    
    3 1 2 3
    
    2 5 9
    
Sample output:


    17
    
    
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
