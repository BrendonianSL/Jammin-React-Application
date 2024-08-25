import React, { useState } from 'react';
import PlaylistPresentational from './PlaylistPresentational';
export default function PlaylistContainer({ playlist, setPlaylist, authToken, userID }) {
    //Create State For Playlist Name
    const [playlistName, setPlaylistName] = useState('');

    //Functions Handles It's Own State Of Playlist Name
    function handleNameChange({target}) {
        const playlistValue = target.value;
        setPlaylistName(playlistValue);
    }

    return <PlaylistPresentational userID={userID} playlist = {playlist} value = {playlistName} handleNameChange = {handleNameChange} updatePlaylist = {setPlaylist} authToken={authToken} />
}