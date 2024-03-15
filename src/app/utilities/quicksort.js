// https://en.wikipedia.org/wiki/Quicksort#Algorithm


// Sorts a portion of an array using the quicksort algorithm
// A is an array
// lo is the lower index of A ( lowest would be A[0] )
// hi is the higher index of A ( highest would be A[A.length - 1] )
export function quicksort(A, lo, hi) {

    console.log('A: ', A);
    console.log('lo: ', lo, A[lo]);
    console.log(' hi: ', hi, A[hi]);

    if (lo >= 0 && hi >= 0 && lo < hi) {
        let p = partition(A, lo, hi); 
        console.log('partition p: ', p, A[p]);

        quicksort(A, lo, p); // Sort the left partition
        quicksort(A, p + 1, hi); // Sort the right partition
    }
}

// Divides array into two partitions
function partition(A, lo, hi) {

    // Pivot value
    let pivot = A[lo]; // Choose the first element as the pivot
    console.log('pivot',pivot);

    // Left index
    let i = lo - 1;
    console.log('i', i)

    // Right index
    let j = hi + 1;
    console.log('j', j)

    while (true) {
        // Move the left index to the right at least once and while the element at
        // the left index is less than the pivot
        do {
            i++;
            console.log('i++', i)

        } while (A[i] < pivot);

        // Move the right index to the left at least once and while the element at
        // the right index is greater than the pivot
        do {
            j--;
            console.log('       j++', j)
        } while (A[j] > pivot);

        // If the indices crossed, return
        if (i >= j) return j;

        // Swap the elements at the left and right indices
        [A[i], A[j]] = [A[j], A[i]];
    }
}

// to sort entire array  quicksort(A, 0, length(A) - 1)