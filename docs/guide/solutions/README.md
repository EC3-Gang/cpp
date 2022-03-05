# Solutions to [Codebreaker](https://codebreaker.xyz) problems(NOT necessarily in sorted order)

## helloworld
This problem tests your output skills but its soooo basic if you are referring to this why are you even in Ec3 you DISGRACE (jkjkjkjk)
```cpp
#include <iostream>
using namespace std;

int main() {
  cout << "Hello World";
  return 0;
}
```

## addition
Yeah just add them.
```cpp
#include <iostream>
using namespace std;

int main() {
  long long int a, b;
  cin >> a >> b;
  cout << a + b << "\n";
}
```
## exam
a combination of the above 2 problems, but using a if function
```cpp
#include <bits/stdc++.h>
using namespace std;
#define loop(start, end) for (auto i = start; i < end; i++)
#define ll long long
int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int x;
    cin>>x;
    if(x==1)
    {
        cout<<"Hello World";
    }
    else if(x==2)
    {
        ll a,b;
        cin>>a>>b;
        cout<<a*b;
    }
}
```

## sumint
Sum of all the intergers
```cpp
#include <bits/stdc++.h>
using namespace std;
int main()
{
    int n;
    cin>>n;
    int sum=0,x;
    for(int i=0;i<n;++i){
        cin>>x;
        sum+=x;
    }
    cout<<sum;
}

## maximum
Here, we can use the std::max() function to get the maximum of the 2 numbers
```cpp
#include <bits/stdc++.h>
using namespace std;
int main()
{
    int a,b;
    cin>>a>>b;
    cout<<max(a,b);
}
```

## gcd
yes theres also a function for that refer below
```cpp
#include <iostream>
#include <algorithm>
using namespace std;
int main() { 
    int x;
    int y;
	cin>>x>>y;
    cout<<__gcd(x,y);
}
```

## 3nplus1
This problem is actually a really classic problem called the Collatz Conjecture. We just loop the loop and output all the changes until we get n==1.
```cpp
#include <bits/stdc++.h>
using namespace std;
int main()
{
    int n;
    cin>>n;
    while(n!=1)
    {
        cout<<n<<" ";
        if(n%2==1)
        {
            n=n*3;
            n++;
        }
        else
        {
            n=n/2;
        }
    }
    cout<<n;
}
```

## psle
This questions tests your meticulousness lmao
```cpp
#include <bits/stdc++.h>
using namespace std;
int main()
{
    int a;
    cin>>a;
    if(a>=91)
    {
        cout<<"A*";
    }
    else if(a>=75 && a<=90)
    {
        cout<<"A";
    }
    else if(a>=60 and a<=74)
    {
        cout<<"B";
    }
    else if(a>=50 and a<=59)
    {
        cout<<"C";
    }
    else if(a>=35 and a<=49)
    {
        cout<<"D";
    }
    else if(a>=20 and a<=34)
    {
        cout<<"E";
    }
    else if(a<=19)
    {
        cout<<"U";
    }
}
```
## evenorodd
This problem tests your understanding of the "%" operator
```cpp
#include <bits/stdc++.h>
using namespace std;
int main()
{
    int a;
    cin>>a;
    if(a%2==1)
    {
        cout<<"Odd";
    }
    else
    {
        cout<<"Even";
    }
}
```

## adjmatrix
YEAH this is where it really seems like cp. For this question, we can make an NxN array and based on the input-ed numbers, use them to change any 0s to 1.
```cpp
#include <bits/stdc++.h>
using namespace std;
int main()
{
	int n,e;
	cin>>n>>e;
	int adjmatrix[n+1][n+1];
	memset(adjmatrix,0,sizeof(adjmatrix));
	int x,y;
	for(int i=0;i<e;++i){
		cin>>x>>y;
		adjmatrix[x][y]=1;
		adjmatrix[y][x]=1;
	}
	for(int i=1;i<=n;++i){
		for(int j=1;j<=n;++j){
			cout<<adjmatrix[i][j];
		}
		cout<<endl;
	}
}
```

## rightangtri
Here we make a right-angled triangle using nested for loops
```cpp
#include <bits/stdc++.h>
using namespace std;
int main()
{
	int n;
	cin>>n;
	int print=0;
	for(int i=0;i<n;++i){
		print++;
		for(int j=0;j<print;++j){
			cout<<"*";
		}
		cout<<endl;
	}
}
```

## potatosalad
For this question, we can input an array, then sort the array using the std::sort() function. After that, we can work backwords using a for loop based on how many potatoes we need.
```cpp
#include <bits/stdc++.h>
#define ll long long
using namespace std;
int main()
{
	ll n,m;
	cin>>n>>m;
	int pots[n];
	for(ll i=0;i<n;++i){
		cin>>pots[i];
	}
	sort(pots,pots+n);
	ll ans=0;
	for(ll i=n-1;i>n-1-m;--i){
		ans+=pots[i];
	}
	cout<<ans;
}
```

Nothing else for now :D
