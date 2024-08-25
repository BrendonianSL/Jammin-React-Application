export default async function CreatePlaylist(authToken, userID, playlistName)
{
    try 
    {
        const requestUrl = `https://api.spotify.com/v1/users/${userID}/playlists`;
        const response = await fetch(requestUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: playlistName, 
                description: "Created Using Jamming React Application By Brendan Lewis",
                public: true,
            }),
        });
    
        if(!response.ok)
        {
            console.error("Error Creating Playlist");
        }

        const data = await response.json();
        return data.id;
    } catch(error) {
        console.error('Fetch Error:', error);
    }
}