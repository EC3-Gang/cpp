# Bubble Sort

Bubble Sort is a sorting algorithm that compares two adjacent elements and swaps them until they are in the intended order.

Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration.
Therefore, it is called bubble sort.
It is one of the simplest sorting algorithms.

| Cases                      | Time                                                                          |
| -------------------------- | ----------------------------------------------------------------------------- |
| Worst-Case Time Complexity | &Oscr;(n<sup>2</sup>). Worst case occurs when array is reverse sorted.        |
| Best-Case Time Complexity  | &Oscr;(n<sup>2</sup>). Best case occurs when array is already sorted.         |
| Auxiliary Space            | &Oscr;(1)                                                                     |
| Boundary Cases             | Bubble sort takes minimum time (order of n) when elements are already sorted. |

| Property         | :white_check_mark:/:x: |
| ---------------- | ---------------------- |
| Sorting In Place | :white_check_mark:     |
| Stable           | :white_check_mark:     |

## Implementation

```cpp
/* Code for bubble sort */
#include <bits/stdc++.h>
using namespace std;
void swap(int *xp, int *yp) {
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}

// An optimized version of Bubble Sort
void bubbleSort(int arr[], int n) {
   int i, j;
   bool swapped;
   for (i = 0; i < n - 1; i++) {
     swapped = false;
     for (j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j+1]) {
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
