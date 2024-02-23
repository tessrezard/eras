

export const reverseEraOrder = (tracks) => {

    // to make a dataset for horizontal styling, reverse album order. 
    let horizontalJustTracks = [];

    const eraOrder = [
        "taylorSwift",
        "fearless",
        "speakNow",
        "red",
        "nineteenEightyNine",
        "reputation",
        "lover",
        "christmas",
        "folklore",
        "evermore",
        "renegade",
        "carolina",
        "midnights",
        "theTorturedPoetsDepartment"
    ]

    const otherEras = [
        "christmas",
        "renegade",
        "carolina"
    ]

    // Group tracks by era
    const groupedByEra = tracks.reduce((accumulator, track) => {
        const era = track.era;
        accumulator[era] = [...(accumulator[era] || []), track];
        return accumulator;
    }, {});

    // Reorder the tracks based on eraOrder
    const reorderedTracks = eraOrder.flatMap(era => groupedByEra[era] || []);

    return (reorderedTracks);
}

