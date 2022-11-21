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
<CodeGroupItem title="Go">

```go{5-10}
package main

import "fmt"

func sum(n int) int {
	if n <= 1 {
		return n
	}
	return sum(n-1) + sum(n-2)
}

func main() {
	var n int
	fmt.Scan(&n)
	fmt.Println(sum(n))
}
```

</CodeGroupItem>
<CodeGroupItem title="C">

```c{3-6}
#include <stdio.h>

int sum(int n) {
	if (n <= 1) return n;
	return sum(n - 1) + sum(n - 2);
}

int main() {
	int n;
	scanf("%d", &n);
	printf("%d\n", sum(n));
}
```

</CodeGroupItem>
<CodeGroupItem title="C#">

```csharp{4-7}
using System;

class Program {
	static int sum(int n) {
		if (n <= 1) return n;
		return sum(n - 1) + sum(n - 2);
	}

	static void Main(string[] args) {
		int n = Convert.ToInt32(Console.ReadLine());
		Console.WriteLine(sum(n));
	}
}
```

</CodeGroupItem>
<CodeGroupItem title="Ruby">

```ruby{3-6}
def sum(n)
	if n <= 1
		return n
	end
	return sum(n - 1) + sum(n - 2)
end

n = gets.chomp.to_i
puts sum(n)
```

</CodeGroupItem>
<CodeGroupItem title="PHP">

```php{2-5}
<?php
function sum($n) {
	if ($n <= 1) return $n;
	return sum($n - 1) + sum($n - 2);
}

$n = intval(fgets(STDIN));
echo sum($n);
?>
```

</CodeGroupItem>
<CodeGroupItem title="Swift">

```swift{1-6}
func sum(_ n: Int) -> Int {
	if n <= 1 {
		return n
	}
	return sum(n - 1) + sum(n - 2)
}

let n = Int(readLine()!)!
print(sum(n))
```

</CodeGroupItem>
<CodeGroupItem title="Kotlin">

```kotlin{1-4}
fun sum(n: Int): Int {
	if (n <= 1) return n
	return sum(n - 1) + sum(n - 2)
}

fun main() {
	val n = readLine()!!.toInt()
	println(sum(n))
}
```

</CodeGroupItem>
<CodeGroupItem title="Dart">

```dart{3-7}
import 'dart:io';

int sum(int n) {
	if (n <= 1) return n;
	return sum(n - 1) + sum(n - 2);
}

void main() {
	int n = int.parse(stdin.readLineSync());
	print(sum(n));
}
```

</CodeGroupItem>
</CodeGroup>

*The highlighted part is the recursive function.*

The above solution was written for [this problem](https://codebreaker.xyz/problem/fibo), but TLE'd on one of the last test cases.
