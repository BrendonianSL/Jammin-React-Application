// Holds Variable For Client ID
export const clientID = 'INSERT CLIENT ID HERE';
const clientSecret = 'INSERT CLIENT SECRET HERE';

export async function ObtainAuthentication(code) {
    const credentials = btoa(`${clientID}:${clientSecret}`);

    try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${credentials}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: 'http://localhost:3000/',
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error obtaining token: ${errorData.error.message}`);
        }

        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error('Error obtaining token:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
}
