---
lang: en-us
title: Greedy Algorithms
---

# Data Strutures

Skip this if your brain cells got murdered in the graph theory section

## Fenwick Tree

### Fenwick Tree explained
Finds range sum in O(log(N)) time instead of O(N)

BUT WAIT!!! CANT YOU DO THAT WITH PREFIX SUM??? EVEN THATS FASTER!!!

Lol no what if you need to update?

Fenwick tree supports point update and range update :)

A Fenwick Tree is also called a binary-indexed tree. 

So how a Fenwick Tree works is it covers ranges in the array *binarily* (i made that up)

Imagine a tree, but the parent node spans from the leftmost node to the middle node.
Then, the 2 nodes after that spans half as much as the first one

To show this, lets say we plot it out

1111111100000000

2222000022220000

Where 1 represents the parent node and 2 represents the child of the parent. If this keeps on going, you will get this:

0000000000000000


1111111100000000

2222000022220000

3300330033003300

4040404040404040

So how does it get range sum now?

You can see that if you want to get the range sum of nodes 1-8, you can just take the entire segment of 1s

If you want to get the range sum of 1-5, you can take the 4 2s + the third 4

So on and so forth

### Point update Fenwick Tree

This can only update one point at a time and get range sums:

```cpp
int fw[N];
void update(int x, int v) {
    for (; x<N; x+=x&(-x)) fw[x] += v; 
}
int sum(int x) {
    int res = 0;
    for(; x; x-=x&(-x)) res += fw[x];
    return res;
}
```

### Range update Fenwick Tree

This can update ranges at a time, using 2 Fenwick Trees:

```cpp
int fw[N], fw2[N];
void update(int x, int y, int v) { //inclusive
    for (int tx=x; tx < N; tx += tx&(-tx)) fw[tx] += v, fw2[tx] -= v*(x-1);
    for (int ty=y+1; ty < N; ty += ty&(-ty)) fw[ty] -= v, fw2[ty] += v*y; 
}
int sum (int x) {
    int res = 0;
    for (int tx=x; tx; tx -= tx&(-tx)) res += fw[tx]*x + fw2[tx];
    return res;
}
int range_sum(int x, int y) { //inclusive
    return sum(y)-sum(x-1);
}
```

## Segment Tree

I warned you

### Segment tree explained

Just an advanced fenwick tree lmao

But it supports much more, like range set, range add, range min, range max.

Something very special about segment tree is something called lazy node creation and lazy propagation.

Now what exactly is a lazy node creation?

### Lazy node creation

It only creates nodes in the tree if it absolutely needs to. 

Now that was easy. Whats lazy propagation?

### Lazy propagation

It only updates nodes if it is within range of the specified node. Else it will not update anything.

### Initializing the struct

```cpp
int s, e;
ll mn, mx, sum;
bool lset;
ll add_val, set_val;
node *l, *r;
node (int _s, int _e, int A[] = NULL): s(_s), e(_e), mn(0), mx(0), sum(0), lset(0), add_val(0), set_val(0), l(NULL), r(NULL) {
    if (A == NULL) return;
    if (s == e) mn = mx = sum = A[s];
    else {
        l = new node(s, (s+e)>>1, A), r = new node((s+e+2)>>1, e, A);
        combine();
    }
}
```

### Lazy propagation

```cpp
    void self_set(ll v) {
        lset = 1;
        mn = mx = set_val = v;
        sum = v * (e-s+1);
        add_val = 0;
    }
    void self_add(ll v) {
        if (lset) { self_set(v + set_val); return; }
        mn += v, mx += v, add_val += v;
        sum += v*(e-s+1);
    }
    void lazy_propagate() {
        if (s == e) return;
        if (lset) {
            l->self_set(set_val), r->self_set(set_val);
            lset = set_val = 0;
        }   
        if (add_val != 0) {
            l->self_add(add_val), r->self_add(add_val);
            add_val = 0;
        }
    }
```
### Range sum

```cpp
ll range_sum(int x, int y) {
    if (s == x && e == y) return sum;
    if (l == NULL || lset) return (sum / (e-s+1)) * (y-x+1);
    int m = (s+e)>>1;
    lazy_propagate();
    if (y <= m) return l->range_sum(x, y);
    if (x > m) return r->range_sum(x, y);
    return l->range_sum(x, m) + r->range_sum(m+1, y);
}
```

### Range update

```cpp
    void add(int x, int y, ll v) {
        if (s == x && e == y) { self_add(v); return; }
        int m = (s+e)>>1;
        create_children(); lazy_propagate();
        if (x <= m) l->add(x, min(y, m), v);
        if (y > m) r->add(max(x, m+1), y, v);
        combine();
    }
```
### All in one segment tree

```cpp
typedef long long ll;
struct node {
    int s, e;
    ll mn, mx, sum;
    bool lset;
    ll add_val, set_val;
    node *l, *r;
    node (int _s, int _e, int A[] = NULL): s(_s), e(_e), mn(0), mx(0), sum(0), lset(0), add_val(0), set_val(0), l(NULL), r(NULL) {
        if (A == NULL) return;
        if (s == e) mn = mx = sum = A[s];
        else {
            l = new node(s, (s+e)>>1, A), r = new node((s+e+2)>>1, e, A);
            combine();
        }
    }
    void create_children() {
        if (s == e) return;
        if (l != NULL) return;
        int m = (s+e)>>1;
        l = new node(s, m);
        r = new node(m+1, e);
    }
    void self_set(ll v) {
        lset = 1;
        mn = mx = set_val = v;
        sum = v * (e-s+1);
        add_val = 0;
    }
    void self_add(ll v) {
        if (lset) { self_set(v + set_val); return; }
        mn += v, mx += v, add_val += v;
        sum += v*(e-s+1);
    }
    void lazy_propagate() {
        if (s == e) return;
        if (lset) {
            l->self_set(set_val), r->self_set(set_val);
            lset = set_val = 0;
        }   
        if (add_val != 0) {
            l->self_add(add_val), r->self_add(add_val);
            add_val = 0;
        }
    }
    void combine() {
        if (l == NULL) return;
        sum = l->sum + r->sum;
        mn = min(l->mn, r->mn);
        mx = max(l->mx, r->mx);
    }
    void add(int x, int y, ll v) {
        if (s == x && e == y) { self_add(v); return; }
        int m = (s+e)>>1;
        create_children(); lazy_propagate();
        if (x <= m) l->add(x, min(y, m), v);
        if (y > m) r->add(max(x, m+1), y, v);
        combine();
    }
    void set(int x, int y, ll v) {
        if (s == x && e == y) { self_set(v); return; }
        int m = (s+e)>>1;
        create_children(); lazy_propagate();
        if (x <= m) l->set(x, min(y, m), v);
        if (y > m) r->set(max(x, m+1), y, v);
        combine();
    }
    ll range_sum(int x, int y) {
        if (s == x && e == y) return sum;
        if (l == NULL || lset) return (sum / (e-s+1)) * (y-x+1);
        int m = (s+e)>>1;
        lazy_propagate();
        if (y <= m) return l->range_sum(x, y);
        if (x > m) return r->range_sum(x, y);
        return l->range_sum(x, m) + r->range_sum(m+1, y);
    }
    ll range_min(int x, int y) {
        if (s == x && e == y) return mn;
        if (l == NULL || lset) return mn;
        int m = (s+e)>>1;
        lazy_propagate();
        if (y <= m) return l->range_min(x, y);
        if (x > m) return r->range_min(x, y);
        return min(l->range_min(x, m), r->range_min(m+1, y));
    }
    ll range_max(int x, int y) {
        if (s == x && e == y) return mx;
        if (l == NULL || lset) return mx;
        int m = (s+e)>>1;
        lazy_propagate();
        if (y <= m) return l->range_max(x, y);
        if (x > m) return r->range_max(x, y);
        return max(l->range_max(x, m), r->range_max(m+1, y));
    }
    ~node() {
        if (l != NULL) delete l;
        if (r != NULL) delete r;
    }
} *root;
```

I ripped everything off of noiref go check it out

## Fenwick vs Segment

|  Factor\DS  | Fenwick Tree | Segment tree     |
| --------- | ------------ | ---------------- |
| O(log(N)) | Fast log(N)  | Slow log(N)      |
| Functions | Less functions | More functions |
| Memory    | Less memory    | More memory    |
| Preprocessing time | O(Nlog(N)) | O(N) |
| Code length | Short and elegant | Super long 💀 |
