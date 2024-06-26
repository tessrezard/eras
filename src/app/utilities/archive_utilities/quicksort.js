// https://en.wikipedia.org/wiki/Quicksort#Algorithm
import React, { useState } from "react";
import QuizSongOption from "../../components/QuizSongOption";

// Sorts a portion of an array using the quicksort algorithm
// A is an array
// lo is the lower index of A ( lowest would be A[0] )
// hi is the higher index of A ( highest would be A[A.length - 1] )
const QuizContent = ({ tracks }) => {

    const [quizContent, setQuizContent] = useState(null);
    const [leftOverPivot, setLeftOverPivot] = useState(false);
    const [rightOverPivot, setRightOverPivot] = useState(false);



    const quicksort = (A, lo, hi) => {
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
    const partition = (A, lo, hi) => {
        // Pivot value
        let pivot = A[lo]; // Choose the first element as the pivot
        console.log('pivot', pivot);

        // Left index
        let i = lo - 1;
        console.log('i', i)

        // Right index
        let j = hi + 1;
        console.log('j', j)

        while (true) {

            // Move the left index to the right at least once and 
            // while the element at the left index is less than the pivot
            // EXPLAINED : 
            // move index along from left to right 
            // until song at index is greater than pivot
            do {
                i++;
                // CHANGE PAIR TO BE A[i] and PIVOT
                setQuizContent(
                    <>
                        <QuizSongOption
                            track={A[i]}
                            onClick={() => setLeftOverPivot(true)}
                        />
                        <QuizSongOption
                            track={pivot}
                            onClick={() => setLeftOverPivot(false)}
                        />
                    </>
                )
                // IF USER CLICKS A[i], --> A[i] > pivot
                // IF USER CLICKS pivot, --> A[i] < pivot
                // } while (A[i] < pivot);
            } while (!leftOverPivot);


            // Move the right index to the left at least once 
            // and while the element at the right index is greater than the pivot
            // EXPLAINED : 
            // move index along from right to left 
            // until song at index is greater than pivot
            do {
                j--;
                // CHANGE PAIR TO BE PIVOT and A[j] 
                setQuizContent(<>
                    <QuizSongOption
                        track={pivot}
                        onClick={() => setRightOverPivot(false)}
                    />
                    <QuizSongOption
                        track={A[j]}
                        onClick={() => setRightOverPivot(true)}
                    />
                </>)
                // IF USER CLICKS A[j], --> A[j] > pivot
                // IF USER CLICKS pivot, --> A[j] < pivot
                // } while (A[j] > pivot);
            } while (!rightOverPivot);

            // If the indices crossed, return
            if (i >= j) return j;

            // Swap the elements at the left and right indices
            [A[i], A[j]] = [A[j], A[i]];
        }
    }

    // to sort entire array  quicksort(A, 0, length(A) - 1)
    quicksort(tracks, 0, tracks.length - 1);



    return quizContent;
}

export default QuizContent