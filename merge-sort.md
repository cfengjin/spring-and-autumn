# Merge Sort

Merge sort sorts a list by repeatedly dividing the list into halves, sorting them, and **merging** the halves back together.

<br />

Let's merge sort 4, 9, 2, 1, 8, 4, 6, 3, 7 in ascending order.

We start by divide this list into halves repeatedly until the halves are indivisible.

```
      [ 4 9 2 1 8 4 6 3 7 ]

    [ 4 9 2 1 ]|[ 8 4 6 3 7 ]

[ 4 9 ]|[ 2 1 ]|[ 8 4 ]|[ 6 3 7 ]

 4 | 9 | 2 | 1 | 8 | 4 | 6 |[ 3 7 ]

 4 | 9 | 2 | 1 | 8 | 4 | 6 | 3 | 7
```

Then, **merge** the sorted halves back together.

*Note: any item by itself is already sorted.*

```
 4 | 9 | 2 | 1 | 8 | 4 | 6 | 3 | 7

 4 | 9 | 2 | 1 | 8 | 4 | 6 |[ 3 7 ]

[ 4 9 ]|[ 1 2 ]|[ 4 8 ]|[ 3 6 7 ]

    [ 1 2 4 9 ]|[ 3 4 6 7 8 ]
    
      [ 1 2 3 4 5 6 7 8 9 ]
```

...and we're done!

<br />

Time complexity: O(n log(n))

Space complexity: O(n)

Here's an implementation to merge sort integers in C++:

```C++
void merge_sort(vector<int>& list, int start, int end) { // Range is inclusive: [start, end]
    // Check that the list is divisible.
    if (start < end) {
        int divide = (start + end) / 2;
        
        // Recursively divide the list into halves.
        merge_sort(list, start, divide);
        merge_sort(list, divide + 1, end);
        
        merge(list, start, divide, end);
    }
}

void merge(vector<int>& list, int start, int divide, int end) { // Range is inclusive: [start, divide] [divide + 1, end]
    // Copy the sorted halves from the list so we can overwrite the entire list later.
    vector<int> left(list.begin() + start, list.begin() + divide + 1);
    vector<int> right(list.begin() + divide + 1, list.begin() + end + 1);
    
    int i = 0; // Indexes into the left half;
    int j = 0; // Indexes into the right half;
    
    // Merge the sorted halves together and overwrite the list.
    for (int k = start; k <= end; ++k) {
        if (j >= right.size()) { // If right half is merged.
            list[k] = left[i];
            ++i;
        } else if (i >= left.size()) { // If left half is merged.
            list[k] = right[j];
            ++j;
        } else if (left[i] <= right[j]) {
            list[k] = left[i];
            ++i;
        } else {
            list[k] = right[j];
            ++j;
        }
    }
}
```
