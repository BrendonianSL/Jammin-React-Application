export default async function FetchUserID(authToken) {
    try
    {
        const response = await fetch('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
    
        if(!response.ok) {
            console.error('Error Fetching User Profile');
        }
        
        const data = await response.json();
        return data.id;
    } catch(error) {
        console.error('Error Fetching User Profile', error);
        return null;
    }
}