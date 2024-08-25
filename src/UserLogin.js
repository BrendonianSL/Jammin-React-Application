import { clientID } from "./AuthenticationKey";


export default function UserLogin() {
    const id = clientID;
    const redirectURL = 'http://localhost:3000/';
    const scopes = ['playlist-modify-public', 'user-read-private'];

    // Handle the click event to redirect to Spotify's authorization page
    const handleLoginClick = () => {
        const authUrl = `https://accounts.spotify.com/authorize?` +
            `client_id=${encodeURIComponent(id)}` +
            `&response_type=code` +
            `&redirect_uri=${encodeURIComponent(redirectURL)}` +
            `&scope=${encodeURIComponent(scopes.join(' '))}` +
            `&show_dialog=true`;

        // Redirect the user to the Spotify authorization page
        window.location.href = authUrl;
    };

    return (
        <button onClick={handleLoginClick}>Login</button>
    );

}