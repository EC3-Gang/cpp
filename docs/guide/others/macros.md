# Macros & Aliases

A macro is a piece of code in a program that is replaced by the value of the macro, and is defined by the `#define` directive. They're helpful when you don't want to type out something very long (like say `long long` or `vector<long long>`), and although not really recommended when you're writing a large application, they can save you a bit of time during competitions.

An example would be:

```cpp
#define endl "\n"
```

since we can all agree that `endl` is easier to type than `"\n"` (...right?).

Here's mine:

```cpp
#include <bit>
#include <bits/stdc++.h>
#if __has_include("debugging.hpp")
#include "debugging.hpp"
#endif
#define endl "\n"
using namespace std;
using ll = long long;
using str = string;
#define pb push_back
using vll = vector<ll>;
using ull = unsigned long long;
#define sz(c) (ll)(c.size())
using ld = long double;
using pll = pair<ll, ll>;
using vi = vector<int>;
#define loopi(n) for (ll i = 0; i < n; i++)
#define loopab(b, a) for (ll i = 0; i < b; i += a)
void setIO() {
  ios_base::sync_with_stdio(0);
  cin.tie(nullptr);
  cout.tie(nullptr); // see Fast I/O
}
template <typename T> inline void in(T &inVar) { cin >> inVar; }
template <typename T, typename... S> inline void in(T &inVar, S &...args) {
  cin >> inVar;
  in(args...);
}
template <typename T> inline void out(T outVar) { cout << outVar << '\n'; }
template <typename T, typename... S> inline void out(T outVar, S... args) {
  cout << outVar << ' ';
  out(args...);
}
```

and here's Darren's:

```cpp
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
typedef long double ld;
typedef unsigned long long ull;
#define rep(i, s, e) for (ll i = (s); i < (e); i++)
#define per(i, s, e) for (ll i = (s); i > (e); i--)
#define f0r(i, n) for (ll i = 0; i < (n); i++)
#define r0f(i, n) for (ll i = (n); i >= 0; i--)
#define far(i, v) for (auto i : (v))
#define setup                                                                  \
  ios_base::sync_with_stdio(false);                                            \
  cin.tie(nullptr);                                                            \
  cout.tie(nullptr);
template <typename T> inline void in(T &inVar) { cin >> inVar; }
template <typename T, typename... S> inline void in(T &inVar, S &...args) {
  cin >> inVar;
  in(args...);
}
template <typename T> inline void out(T outVar) { cout << outVar << '\n'; }
template <typename T, typename... S> inline void out(T outVar, S... args) {
  cout << outVar << ' ';
  out(args...);
}
typedef vector<ll> vi;
typedef pair<ll, ll> pi;
typedef vector<pi> vpi;
#define vc vector
#define dq deque
#define qu queue
#define pq priority_queue
#define st stack
#define ma map
#define fi first
#define se second
#define all(c) (c).begin(), (c).end()
#define sz(c) (ll)(c.size())
#define pb push_back
#define mp make_pair
```
