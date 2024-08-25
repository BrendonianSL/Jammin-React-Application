import React from "react";

export default function ResultsContainer({ songResults = [], setPlaylist }) {

    function handlePlaylistChange(result) {
        //If the playlist contains the song, don't add it
        setPlaylist((prevPlaylist) => {
            if (prevPlaylist.includes(result)) {
                return prevPlaylist;
            }
            return [...prevPlaylist, result];
        });
    }
    // Ensure songResults is always an array, even if undefined or null is passed
    if (!songResults.length) {
        return <p>No results found.</p>;
    }

    return (
        <div>
            {songResults.map((result, index) => (
                <div key={index}>
                <button onClick={() => handlePlaylistChange(result)}>
                    <p>Song Name: {result.songName}</p>
                    <p>Artist: {result.artist}</p>
                    <p>Album: {result.album}</p>
                </button>
                </div>
            ))}
        </div>
    );
}
