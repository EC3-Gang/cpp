---
lang: en-US
title: STL Data Structures
---

# STL Data Structures (mostly by Darren)

I'm going to talk about some data structures found in the standard library and how to implement them,
along with a few useful functions you should probably know about.

## Arrays

By far the simplest data structure you should probably know about is the array.

Arrays have:

- a fixed size (number of elements it can contain)
  - no capability to erase / append elements
- elements with all the same datatypes

Here's a short snippet showing what arrays can do:

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	int arr[5]; // defines an array of ints with size 5
	arr[0] = 1; // sets the first element of the array to 1
	arr[3] = 57; // sets the fourth element to 57

	cout << arr[3];
	cin >> arr[2]; // get the user to input the third element of the array

	cout << arr.size(); // size of the array
}
```

## Vectors

Basically arrays with the capability to append elements (from the end) and pop elements from the back.

Erasing elements from anywhere in the vector is also allowed.

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	vector<int> v; // defines a vector of ints
	v.push_back(5); // appends 5 to the vector
	v.push_back(9);
	v.push_back(6);
	v.push_back(0);

	v.pop_back(); // now what does the vector contain?

	cout << v.size(); // size of the vector
	cout << v.front() << ' ' << v.back(); // first and last elements

	sort(v.begin(), v.end()); // sorts the vector

	for (auto i : v) cout << i << ' '; // iterates through every element in the vector
}
```

## Deque

Pronounced 'deck' or 'd-q', I don't give two shakes about how it's pronounced.

It's a vector on steroids, allowing you to insert (from the front) and append (from the back) elements.
It can also pop elements from the front & back.

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	deque<long> d; // creates a deque of long ints

	// gets the user to cin 5 elements and store them in the deque
	for (int i = 0; i < 5; i++) {
		long a;
		cin >> a;
		d.push_back(a);
	}

	d.push_front(55); // now 55 is at the front

	// d.size(), d.front() and d.back() still work
	// sort(d.begin(), d.end() still works)

	d.pop_back();
	d.pop_front();
	cout << "oh bother there are only " << d.size() << " elements left.";
}
```

## Stacks

Stacks are basically stacks of _roti prata_ (or your mountain of procrastinated homework).

You can only access the top element, and only erase the top element. (What kind of sick freak would take prata from the bottom of the stack)?

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	stack<int> s;
	s.push(5);
	s.push(7);
	s.push(69);

	cout << s.top() << " is currently 1st place in kahoot\n";
	cout << "there are " << s.size() << " players\n";

	while (!s.empty()) s.pop(); // check if the stack is empty, if not, keep popping!
	cout << s.size() << " more players left\n";
}
```

## Queue

Like the perpetually long canteen queue in the HS Canteen during 1:30 pm lunch break,
queues add elements from the back and pop elements from the front (in case you don't know how a real-life queue works).

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	queue<int> q;
	q.push(5);
	q.push(4);
	q.push(4);
	q.push(3);

	cout << q.size() << '\n';

	// quick way to see all the elements in the queue
	while (!q.empty()) {
		cout << q.front() << ' ';
		q.pop();
	}

	// NOTE: notice that only 1 occurrence of 4 is printed out, because a queue removes duplicate values
}
```

## Priority Queue

Like a queue, but the most popular boy is now at the end perpetually.

Priority queues sort the elements every time a new element is pushed in.

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	priority_queue<int> pq;
	pq.push(5);
	pq.push(6);
	pq.push(3);

	cout << pq.size() << '\n';

	// NOTE: notice that the elements are printed in ascending order!
	while (!pq.empty()) {
		cout << pq.front() << ' ';
		q.pop();
	}
}
```

## Map

A map is a key-value data structure, with a key being linked to a value (can be different datatype).

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	map<string, int> m;
	m["yo"] = 6;
	m["mom"] = 9;
	m["so"] = 4;
	m["fat"] = 420;

	cout << m["fat"] << '\n';
	cout << m.size() << '\n';

	m.insert(pair<string, int>("abc", 123)); // can also insert like this

	// loop through key and value
	for (auto itr = marks.begin(); itr != marks.end(); ++itr) {
		cout  << itr->first << ": " << itr->second << 'n';
	}
}
```

## Sets

A set is a more picky vector, it:

- removes duplicate values
- sorts every time you insert an element

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	set<int> s;

	s.insert(40);
	s.insert(35);
	s.insert(55);

	set<int>::iterator itr; // defines an iterator of the set
	cout << "this set weighs " << s.size() << " kg\n";

	// prints all the elements in the set
	for (itr = s.begin(); itr != s.end(); s++) cout << *itr << " ";

	s.erase(s.begin(), s.find(55)); // remove 55

	// lower_bound() and upper_bound(): returns an iterator to the first element which is
	// equal to OR before / after the element in the set
	cout << s.lower_bound(37) << " " << s.upper_bound(37);
}
```

## Final Notes

There are dozens of STL data structures out there, but these are the most popular ones.

Anyway I copied most of them from <https://www.geeksforgeeks.org>.
