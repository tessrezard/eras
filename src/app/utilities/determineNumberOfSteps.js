export const determineNumSteps = (numPairs, step) => {
    
    // console.log('numPairs', numPairs);
    // console.log('step', step);

    if ((numPairs & (numPairs - 1) &&  numPairs > 2) === 0){
        // console.log(`${numPairs} is POWER OF 2`)
    }



     // Initialize the steps counter
     let steps = 0;
    let pairCount = numPairs;
     // Continue halving the pair count until it reaches 1
     while (pairCount > 1) {
         pairCount = Math.ceil(pairCount / 2); // Ensure rounding up for uneven pairs
         steps++; // Increment the steps counter
     }
//  console.log(`there will be ${steps} for ${numPairs} pairs `);
     return steps + 1;
 }
 