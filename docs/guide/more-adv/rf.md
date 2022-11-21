# Recursive Functions

Recursive functions are functions which are called within the same function.
Crazy, right?

Pseudocode:

```text
function fn with variable A & B
	if A smaller or equals to B
		print a
		recall function fn with variable A+1 and B

fn(1, 10);
```

Output:

```text
1
2
3
4
5
6
7
8
9
10
```

## Uses in CP

Well...not a lot, to be honest. It TLEs when the there are too many recursions, but usually works for smaller inputs.

Example of a recursive function in CP (calculates the Fibonacci sequence):

<CodeGroup>
<CodeGroupItem title="C++" active>

```cpp{7-10}
#include <iostream>
#define endl "\n"
#define ll long long

using namespace std;

ll sum(ll n) {
  if (n <= 1) return n;
  return sum(n - 1) + sum(n - 2);
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	ll n;
	cin >> n;
	cout << sum(n) << endl;
}
```

</CodeGroupItem>
<CodeGroupItem title="Java">

```java{4-7}
import java.util.Scanner;

public class Main {
	public static long sum(long n) {
		if (n <= 1) return n;
		return sum(n - 1) + sum(n - 2);
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		long n = sc.nextLong();
		System.out.println(sum(n));
	}
}
```

</CodeGroupItem>
<CodeGroupItem title="Python">

```python{1-4}
def sum(n):
	if n <= 1:
		return n
	return sum(n - 1) + sum(n - 2)

n = int(input())
print(sum(n))
```

</CodeGroupItem>
<CodeGroupItem title="Rust">

```rust{3-8}
use std::io;

fn sum(n: i32) -> i32 {
	if n <= 1 {
		return n;
	}
	return sum(n - 1) + sum(n - 2);
}

fn main() {
	let mut n = String::new();
	io::stdin().read_line(&mut n).expect("Failed to read line");
	let n: i32 = n.trim().parse().expect("Please type a number!");
	println!("{}", sum(n));
}
```

</CodeGroupItem>
<CodeGroupItem title="JavaScript">

```js{9-12}
// the beauty of JS: no easy i/o
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function sum(n) {
	if (n <= 1) return n;
	return sum(n - 1) + sum(n - 2);
}

rl.question('Enter a number: ', (n) => {
	console.log(sum(n));
	rl.close();
});
```

</CodeGroupItem>
<CodeGroupItem title="Haskell (1)">

```hs{2-4}
fibo :: Integer -> Integer
fibo n
	| n <= 1 = n
	| otherwise = fibo (n - 1) + fibo (n - 2)

main = do
	n <- readLn
	print (fibo n)
```

</CodeGroupItem>
<CodeGroupItem title="Haskell (2)">

```hs{4}
fibo :: Integer -> Integer
fibo 0 = 0
fibo 1 = 1
fibo n = fibo (n - 1) + fibo (n - 2)

main = do
	n <- readLn
	print (fibo n)
```

</CodeGroupItem>
</CodeGroup>

*The highlighted part is the recursive function.*

The above solution was written for [this problem](https://codebreaker.xyz/problem/fibo), but TLE'd on one of the last test cases.
