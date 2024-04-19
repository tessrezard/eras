

export const sortTracksByDuration = (tracks) => {

    
    // Function to sort tracks by duration_ms in descending order
    const sortTracksByDuration = (a, b) => b.duration_ms - a.duration_ms;


    // --------------------------------------------------------------------------
    // RETURN STATEMENT
    // using spread operator to make sorted COPY, not modify original data 
    const sorted = [...tracks].sort(sortTracksByDuration);

    return (sorted);
}











