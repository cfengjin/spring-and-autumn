# Insertion Sort

Insertion sort sorts a list of items from beginning to end by **inserting** the next unsorted item into the correct spot among the already sorted items.

<br />

Let's insertion sort 5, 3, 4, 1, 2 in ascending order.

We start by splitting this list into two groups: sorted and unsorted.

Sorted | Unsorted
-|-
5 | 3 4 1 2

*Note: any item by itself is already sorted.*

<br />

Then, we pick the next unsorted item and **insert** it into the correct position in our sorted list until there are no more items left.

Sorted | Unsorted
-|-
5 | 3 4 1 2
3 5 | 4 1 2
3 4 5 | 1 2
1 3 4 5 | 2
1 2 3 4 5 |

... and we're done!

<br />

Time complexity: O(n<sup>2</sup>)

Space complexity: O(1)

Here's an implementation to insertion sort integers in C++
```C++
void insertion_sort(vector<int>& list) {
    for (int i = 1; i < list.size(); ++i) { // i starts from the beginning of the unsorted list.
        int unsorted_item = list[i];
        
        int j = i - 1;  // j starts at the end of the sorted list
        
        // Go backwards and shift items over to the right until we're at the right spot.
        while (j >= 0 && list[j] > list[i]) {
            list[j + 1] = list[j];
            --j;
        }
        
        // Insert.
        list[j] = unsorted_item;
    }
}
```
