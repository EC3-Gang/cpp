# Bubble Sort
Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are not in the intended order.

Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called a bubble sort. It is one of the simplest sorting algorithms.

- Worst and Average Case Time Complexity: `O(n*n)`. Worst case occurs when array is reverse sorted.
- Best Case Time Complexity: `O(n)`. Best case occurs when array is already sorted.
- Auxiliary Space: `O(1)`
- Boundary Cases: Bubble sort takes minimum time (Order of n) when elements are already sorted.
- Sorting In Place: Yes
- Stable: Yes

## Implementation

```cpp
/* Code for bubble sort */
#include <bits/stdc++.h>
using namespace std;
void swap(int *xp, int *yp)
{
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}
  
// An optimized version of Bubble Sort
void bubbleSort(int arr[], int n)
{
   int i, j;
   bool swapped;
   for (i = 0; i < n - 1; i++)
   {
     swapped = false;
     for (j = 0; j < n - i - 1; j++)
     {
        if (arr[j] > arr[j+1])
        {
           swap(&arr[j], &arr[j+1]);
           swapped = true;
        }
     }
  
     // IF no two elements were swapped by inner loop, then break
     if (swapped == false)
        break;
   }
}
```
*Code is sourced from GeeksforGeeks*