export default async function AddTracks(authToken, playlistID, playlist) {
    const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uris: playlist.map(track => `spotify:track:${track.songID}`),
        }),
    });

    if(!response.ok)
    {
        console.error("Error Adding Tracks To Playlist");
    }
}