# Helpful Macros

Title says it. Helpful macros you can use.

```cpp
// some are the same with different names
#define ll long long
#define ull unsigned long long
#define ld long double
#define pb push_back
#define mp make_pair
#define pii pair<int,int>
#define sz(x) (int)(x).size()
#define endl "\n"
#define pll pair<ll,ll>
#define vi vector<int>
#define vll vector<ll>
#define vvi vector<vi>
#define vvll vector<vll>
#define si set<int>
#define sll set<ll>
#define sull set<ull>
#define vvll vector<vll>
#define vpii vector<pii>
#define vpll vector<pll>
#define all(v) (v).begin(),(v).end()
#define FOR(i,a,b) for(int i=(a);i<(b);++i)
#define FORE(i,a,b) for(int i=(a);i<=(b);++i)
#define FORR(i,a,b) for(int i=(a);i>=(b);--i)
#define FORS(i,a,b,s) for(int i=(a);i<(b);i+=(s))
#define FOREV(i,a,b) for(int i=(a);i<=(b);++i)
#define FOREVRE(i,a,b) for(int i=(a);i>=(b);--i)
#define REP(i,n) FOR(i,0,n)
#define REPE(i,n) FORE(i,0,n)
#define REPR(i,n) FORR(i,n,0)
#define REPS(i,n,s) FORS(i,0,n,s)
#define REPV(i,a,b) FOREV(i,a,b)
#define REPVRE(i,a,b) FOREVRE(i,a,b)
#define RANGE(i,a,b) REPV(i,a,b)
#define RANGES(i,a,b,s) REPS(i,b,s)
#define RANGEV(i,a,b) REPV(i,a,b)
#define RANGEVRE(i,a,b) REPVRE(i,a,b)
#define REPIT(it,v) for(auto it=(v).begin();it!=(v).end();++it)
#define REPI(i,a,b) FOR(i,a,b)
#define REPIRE(i,a,b) FORE(i,a,b)
#define REPIR(i,a,b) FORR(i,a,b)
#define REPIS(i,a,b,s) FORS(i,a,b,s)
#define REPIV(i,a,b) FOREV(i,a,b)
#define REPIVRE(i,a,b) FOREVRE(i,a,b)
#define print(x) cout<<x<<endl
#define println(x) cout<<x<<' ';
#define REPIT(it,v) for(auto it=(v).begin();it!=(v).end();++it)
#define REPITR(it,v) for(auto it=(v).rbegin();it!=(v).rend();++it)
#define ALL(v) (v).begin(),(v).end()
#define ALLR(v) (v).rbegin(),(v).rend()
#define SORT(v) sort(ALL(v))
#define SORTR(v) sort(ALLR(v))
#define UNIQ(v) SORT(v);(v).erase(unique(ALL(v)),(v).end())
#define UNIQR(v) SORTR(v);(v).erase(unique(ALLR(v)),(v).rend())
#define SUM(v) accumulate(ALL(v),0LL)
#define MIN(v) *min_element(ALL(v));
#define MAX(v) *max_element(ALL(v))
void setIO(string name = "") {
	ios_base::sync_with_stdio(0); cin.tie(0); // see Fast Input & Output
}
```