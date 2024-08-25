
export default async function SearchTracks(authToken, input) {
    try {
        if(authToken)
        {
            // Construct the search URL
            const requestUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(input)}&type=track&limit=10`;

            // Perform the search
            const response = await fetch(requestUrl, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error: ${response.status} - ${errorData.error.message}`);
            }

            // Parse the response data
            const data = await response.json();
            const results = data.tracks.items.map(track => {
                return {
                    songName: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    songID: track.id
                };
            });

            // Process the results (This would be your ResultsContainer.ProcessResults function)
            console.log(results);

            return results;
        }
        else {
            console.log("No Auth Token Found");
        }
    } catch (error) {
        console.error('Fetch Error:', error);
    }
}
