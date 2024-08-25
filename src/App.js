import React, { useState, useEffect } from 'react';
import InputContainer from './InputContainer';
import ResultsContainer from './ResultsContainer';
import PlaylistContainer from './PlaylistContainer';
import UserLogin from './UserLogin';
import { ObtainAuthentication } from './AuthenticationKey';
import FetchUserID from './UserID';

function App() {
  // Creates a state for our application's authentication
  const [authToken, setAuthToken] = useState(null);
  const [userID, setUserID] = useState(null);

  // Creates a state for the song results
  const [songResults, setSongResults] = useState([]);

  // Create a state for songs in playlist
  const [currentPlaylist, setPlaylist] = useState([]);

  useEffect(() => {
    // Define and call the async function inside useEffect
    const handleRedirect = async () => {
      console.log("Use Effect Triggered");

      try {
        // Grabs the URL from the page
        const searchParams = new URLSearchParams(window.location.search);

        // Grabs the code parameter from the URL
        const code = searchParams.get('code');

        console.log(code);

        // If there is a code parameter in the URL
        if (code) {
          const token = await ObtainAuthentication(code);
          setAuthToken(token);

          if(token) {
            const userID = await FetchUserID(token);
            setUserID(userID);
          }
        } else {
          console.error("Authorization code not found in URL");
        }
      } catch (error) {
        console.log("An Error Has Occurred Loading The Page. Please Try Again");
      }
    };

    handleRedirect(); // Call the async function

  }, []);

  /* If we have an authorization token show the app, if not, show UserLogin. */
  if (!authToken) {
    console.log("No Auth Token Found");
    return (
      <div>
        <p>No User Login Found, Please Login</p>
        <UserLogin />
      </div>
    );
  } else {
    return (
      <div>
        {/* Input Container is responsible for setting the info we search... */}
        <InputContainer authToken={authToken} setSongResults={setSongResults} />

        {/* Results Container is responsible for searching the info we set */}
        <ResultsContainer songResults={songResults} setPlaylist={setPlaylist} />

        {/* Holds the songs in the playlist */}
        <PlaylistContainer authToken={authToken} userID={userID} playlist={currentPlaylist} setPlaylist={setPlaylist} />
      </div>
    );
  }
}

export default App;
