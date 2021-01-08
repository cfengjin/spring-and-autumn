# Insertion Sort

Insertion sort sorts a list of items or keys by continually taking the next unsorted key and **inserting** it into the correct spot among the keys already sorted.

<br />

Let's insertion sort 5, 3, 4, 1, 2 in ascending order.

We start by splitting this list into two groups: sorted and unsorted.

Sorted | Unsorted
-|-
5 | 3 4 1 2

*Note: any key by itself is already sorted.*

Then, we pick the next unsorted key and **insert** it into the correct position in our sorted list until there are no more keys left.

Sorted | Unsorted
-|-
5 | 3 4 1 2
**3** 5 | 4 1 2
3 **4** 5 | 1 2
**1** 3 4 5 | 2
1 **2** 3 4 5 |

... and we're done!

<br />

Time complexity: O(n<sup>2</sup>)

Space complexity: O(1)

Here's an implementation to insertion sort integers in C++
```C++
void insertion_sort(vector<int>& list) {
    for (int i = 1; i < list.size(); ++i) { // i starts from the beginning of the unsorted list.
        int unsorted_key = list[i];
        int j = i - 1;  // j starts at the end of the sorted list.
        
        // Go backwards and shift keys over to the right until we're at the right spot.
        while (j >= 0 && list[j] > unsorted_key) {
            list[j + 1] = list[j];
            --j;
        }
        
        // Insert.
        list[j + 1] = unsorted_key; // j + 1 since the last iteration of the loop decrements j.
    }
}
```
