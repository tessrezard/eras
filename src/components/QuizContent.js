
// https://en.wikipedia.org/wiki/Quicksort#Algorithm

import React, { useState } from "react";
import QuizSongOption from "./QuizSongOption";

const QuizContent = ({ tracks }) => {

    const sortedTracks = tracks;
    const [quizContent, setQuizContent] = useState(null);

    const [leftOverPivot, setLeftOverPivot] = useState(false);
    const [rightOverPivot, setRightOverPivot] = useState(false);

    const [leftIndex, setLeftIndex] = useState();
    const [rightIndex, setRightIndex] = useState();

    const [sorted, setSorted] = useState(false);
    console.log(sortedTracks)

    // Sorts a portion of an array using the quicksort algorithm
    // A is an array
    // lo is the lower index of A ( lowest would be 0 for : A[0] )
    // hi is the higher index of A ( highest would be A.length -1 for : A[A.length - 1] )
    const quicksort = (A, lo, hi) => {
        console.log('A: ', A);
        console.log('lo: ', lo, A[lo]);
        console.log(' hi: ', hi, A[hi]);


        if (lo >= 0 && hi >= 0 && lo < hi) {
            // let p = partition(A, lo, hi);
            // console.log('partition p: ', p, A[p]);
            // quicksort(A, lo, p); // Sort the left partition
            // quicksort(A, p + 1, hi); // Sort the right partition
        } else {
            setSorted(true);
        }
    }


    // Divides array into two partitions
    const partition = (A, lo, hi) => {
        // Pivot value
        let pivot = A[lo]; // Choose the first element as the pivot
        console.log('pivot', pivot);

        // Left index
        // let i = lo - 1;
        // console.log('i', i)
        setLeftIndex(lo - 1);

        // Right index
        // let j = hi + 1;
        // console.log('j', j)
        setRightIndex(hi + 1);

        while (!sorted) {

            // Move the left index to the right at least once and 
            // while the element at the left index is less than the pivot
            // EXPLAINED : 
            // move index along from left to right 
            // until song at index is greater than pivot
            // do {
            //     // i++;
            //     // setLeftIndex(prev => prev + 1);
            //     // CHANGE PAIR TO BE A[i] and PIVOT
            //     setQuizContent(
            //         <>
            //             <QuizSongOption
            //                 track={A[leftIndex]}
            //                 onClick={() => {
            //                     setLeftOverPivot(true)
            //                     setLeftIndex(prev => prev + 1);
            //                 }}
            //             />
            //             <QuizSongOption
            //                 track={pivot}
            //                 onClick={() => {
            //                     setLeftOverPivot(false)
            //                     setLeftIndex(prev => prev + 1);
            //                 }}
            //             />
            //         </>
            //     );
            //     // IF USER CLICKS A[i], --> A[i] > pivot
            //     // IF USER CLICKS pivot, --> A[i] < pivot
            //     // } while (A[i] < pivot);
            // } while (!leftOverPivot);

            if (!leftOverPivot) {
                return (
                    <>
                    <QuizSongOption
                        track={A[leftIndex]}
                        onClick={() => {
                            setLeftOverPivot(true)
                            setLeftIndex(prev => prev + 1);
                        }}
                    />
                    <QuizSongOption
                        track={pivot}
                        onClick={() => {
                            setLeftOverPivot(false)
                            setLeftIndex(prev => prev + 1);
                        }}
                    />
                </>
                )
            }


            // Move the right index to the left at least once 
            // and while the element at the right index is greater than the pivot
            // EXPLAINED : 
            // move index along from right to left 
            // until song at index is greater than pivot
            // do {
            //     // j--;
            //     // setRightIndex(prev => prev - 1);
            //     // CHANGE PAIR TO BE PIVOT and A[j] 
            //     setQuizContent(<>
            //         <QuizSongOption
            //             track={pivot}
            //             onClick={() => {
            //                 setRightOverPivot(false)
            //                 setRightIndex(prev => prev - 1)
            //             }}
            //         />
            //         <QuizSongOption
            //             track={A[rightIndex]}
            //             onClick={() => {
            //                 setRightOverPivot(true)
            //                 setRightIndex(prev => prev - 1);
            //             }
            //             }
            //         />
            //     </>);
            //     // IF USER CLICKS A[j], --> A[j] > pivot
            //     // IF USER CLICKS pivot, --> A[j] < pivot
            //     // } while (A[j] > pivot);
            // } while (!rightOverPivot);

            if (!rightOverPivot) {
                return (
                    <>
                    <QuizSongOption
                        track={pivot}
                        onClick={() => {
                            setRightOverPivot(false)
                            setRightIndex(prev => prev - 1)
                        }}
                    />
                    <QuizSongOption
                        track={A[rightIndex]}
                        onClick={() => {
                            setRightOverPivot(true)
                            setRightIndex(prev => prev - 1);
                        }
                        }
                    />
                </>
                )
            }

            // // If the indices crossed, return
            // if (leftIndex >= rightIndex) return rightIndex;

            // // Swap the elements at the left and right indices
            // [A[leftIndex], A[rightIndex]] = [A[rightIndex], A[leftIndex]];
        }
    }

    // to sort entire array  quicksort(A, 0, length(A) - 1)

    // try {
    //     console.log(quicksort(tracks, 0, tracks.length - 1));
    // }catch (error) {
    //     console.log(error)
    // }


    quicksort(sortedTracks, 0, sortedTracks.length - 1);

    const Content = () => {
        return quizContent;
    }
    return(
         <>
            <Content/>
            
         </>
         );
}

export default QuizContent