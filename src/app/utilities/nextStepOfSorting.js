

export const nextStepOfSorting = (rankedArr) => {
    const pieces = [];
    const pieceSize = 2;
    // console.log('rankedARR', rankedArr);
    if (rankedArr) {
            // for (let i = 0; i < rankedArr.length; i += pieceSize) {
            //     pieces.push(rankedArr.slice(i, i + pieceSize));
            for (let i = 0; i < rankedArr.length; i += pieceSize) {
                if (i + 1 < rankedArr.length) {
                    pieces.push([rankedArr[i], rankedArr[i + 1]]);
                } else {
                    // pieces.push([rankedArr[i]]);
                }
            
        } 

    }
    return pieces;

}








export const test = (rankedArr) => {
    // Check if rankedArr is an array
    if (!Array.isArray(rankedArr)) {
        console.error('Input is not an array');
        return [];
    }

    const pairs = [];
    const pieceSize = 2;

    // Loop through rankedArr to create pairs
    for (let i = 0; i < rankedArr.length; i += pieceSize) {
        if (i + 1 < rankedArr.length) {
            pairs.push([rankedArr[i], rankedArr[i + 1]]);
        } else {
            pairs.push([rankedArr[i]]);
        }
    }

    return pairs;
}




export const newNextStepOfSorting = (rankedArr) => {
    function isEven(number) {
        return number % 2 === 0;
    }

    if (Array.isArray(rankedArr)) {
        const pieces = [];
        const pieceSize = 2;

        if (isEven(rankedArr.length)) {
            for (let i = 0; i < rankedArr.length; i += pieceSize) {
                pieces.push(rankedArr.slice(i, i + pieceSize));
            }
        } else {
            for (let i = 0; i < rankedArr.length - 1; i += pieceSize) {
                pieces.push(rankedArr.slice(i, i + pieceSize));
            }
            // Push the last element if the array length is odd
            pieces.push(rankedArr.slice(rankedArr.length - 1));
        }
        
        return pieces;
    } else {
        // Handle non-array input (optional)
        console.error('Input is not an array');
        return [];
    }
}