# Graph Theory

Get ready bois

## Graph representation

### Adjacency matrix

```cpp
int adjmatrix[N][N];
// first perimeter stores node 1 and second perimeter stores node 2. Edge weight
// can then be stored in it.
cin >> node1 >> node2 >> weight;
adjmatrix[node1][node2] = weight;
```

### Adjacency list

```cpp
// unweighted adjacency list
vector<int> adjlist[N];
cin >> node1 >> node2;
adjlist[node1].push_back(node2);
// weighted adjacency list
vector < pair<int, int> adjlist[N];
cin >> node1 >> node2 >> weight;
adjlist[node1].push_back({node2, weight});
```

### Edge list

```cpp
pair<int, pair<int, int>> edgelist;
cin >> node1 >> node2 >> weight;
edgelist.first = weight;
edgelist.second.first = node1;
edgelist.second.second = node2;
```

## Graph traversing algorithms

## Unweighted graph traversal

### Depth-first search

Go deep.

Essentially what DFS does is that it goes deeper and deeper (💀) until it cannot go deeper anymore. Then, it backtracks and finds another node which it can look through.

Time complexity: O(V) (tree), O(V+E) (graph)

Here is a simple example of a DFS code:

```cpp
vector<int> adjlist[N];
void dfs(int node) {
  for (auto it : adjlist[node]) {
    dfs(it);
  }
}
```

### Breadth-first search

Go wide.

^^^ thats it

Time complexity: O(V+E) (adjlist), O(V^2) (adjmatrix)

```cpp
queue<pair<int, int>> q;
q.push({0, 0});
while (!q.empty()) {
  auto cur = q.top();
  q.pop();
  // cur will be the node you are traversing right now
  q.push(adjlist[cur.first][cur.second]);
}
```

### Cycle detection

i put this here for fun

Ok heres Floyd's Tortoise and Hare algorithm:

Essentially what it does is it finds cycles in a tree. The hare will move twice as fact as the tortoise, and when they meet you have your answer.

Time complexity: O(V)

One classic example for using this is finding repeated elements in a read-only array

```cpp
void finddup(int arr[]) {
  int tortoise = arr[0];
  int hare = arr[0];
  while (1) {
    tortoise = arr[tortoise];
    hare = arr[arr[hare]];
    if (tortoise == hare)
      break;
  }
  tortoise = arr[0];
  while (tortoise != hare) {
    tortoise = arr[tortoise];
    hare = arr[hare];
  }
  cout << tortoise;
}
```

## Weighted graph traversal

### Dijkstra

This algorithm finds the shortest path from node 1 to essentially every other node.

Time complexity: O((V+E)logV)

Theres really not much to it so heres the code:

```cpp
dist[0] = 0;
while (p.size()) {
  int w = p.top().first, node = p.top().second;
  p.pop();
  if (vis[node])
    continue;
  vis[node] = 1;
  for (auto it : adj[node]) {
    if (dist[node] + it.first < dist[it.second]) {
      dist[it.second] = dist[node] + it.first;
      p.push({dist[it.second], it.second});
    }
  }
}
cout << dist[V - 1];
```

### Floyd-Warshall algorithm

This algorithm finds the shortest path between any node.

Time complexity: O(V^3)

```cpp
for (int k = 0; k < V; k++) {
  for (int i = 0; i < V; i++) {
    for (int j = 0; j < V; j++) {
      if (dist[i][j] > (dist[i][k] + dist[k][j]) &&
          (dist[k][j] != INT_MAX && dist[i][k] != INT_MAX))
        dist[i][j] = dist[i][k] + dist[k][j];
    }
  }
}
```

## Misc.

### Union find disjoint set (UFDS)

What this does it that it stores the parents of nodes in a tree/graph

In a UFDS, there usually are 3 functions: find, same, and merge

Find: finds the parent of specified node

Same: checks if the parents of 2 nodes are the same

Merge: Node A is now node B's child

Heres a complete UFDS code:

```cpp
int P[1000001];
int find(int x) {
  if (P[x] == x) {
    return x;
  } else {
    P[x] = find(P[x]);
    return P[x];
  }
}
bool same(int x, int y) { return find(x) == find(y); }
void merge(int x, int y) {
  x = find(x);
  y = find(y);
  P[x] = y;
}
```

### Minimum spanning tree

An MST tells us the shortest path that connects all the nodes in a tree (woooo)

Heres Kruskal's MST, one block of code must be coded out.

```cpp
pair<ll, pair<ll, ll>> w[k];
sort(w, w + k);
ll l = 0, m = 0, cnt = 0;
while (l < k && cnt < n - 1) {
  ll a = find(w[l].second.first), b = find(w[l].second.second);
  if (a != b) {
    m += w[l].first;
    merge(a, b);
    cnt++;
  }
  l++;
}
```

If you found anything familar here good for you becuse find and merge are both from UFDS. Now you need to code a UFDS to do this :)

Another thing you may have noticed is the edge list. Use it for MST ONLY.

Here is a full MST:

```cpp
// edge list
pair<int, pair<int, int>> adj[1000001];
// parent array
int P[1000001];
// functions
int find(int x) {
  if (P[x] == x) {
    return x;
  } else {
    P[x] = find(P[x]);
    return P[x];
  }
}
bool same(int x, int y) { return find(x) == find(y); }
void join(int x, int y) {
  x = find(x);
  y = find(y);
  P[x] = y;
}
int main() {
  // initializing parent array
  for (int i = 1; i <= n; i++) {
    P[i] = i;
  }
  // input edge list
  for (int i = 0; i < e; ++i) {
    cin >> adj[i].second.first >> adj[i].second.second >> adj[i].first;
  }
  // mst :)
  sort(adj, adj + e);
  for (int i = 0; i < e; i++) {
    if (!same(adj[i].second.first, adj[i].second.second)) {
      join(adj[i].second.first, adj[i].second.second);
      if (same(1, n)) {
        cout << adj[i].first;
        return 0;
      }
    }
  }
}
```
