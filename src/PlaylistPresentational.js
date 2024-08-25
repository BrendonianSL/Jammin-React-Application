import CreatePlaylist from "./CreatePlaylist"
import AddTracks from "./AddTracksToPlaylist";

export default function PlaylistPresentational({ value, handleNameChange, playlist, updatePlaylist, authToken, userID }) {
    return (
        <div>
            <form>
                <input type="text" value={value} id="playlistName" name="playlistName" placeholder="Set Playlist Name" onChange={handleNameChange} required />
                <input type="submit" value="Submit" onClick={async () => {const playlistID = await CreatePlaylist(authToken, userID, value); AddTracks(authToken, playlistID, playlist) }} />
            </form>
            <div>
                {playlist.map(song => {
                    return (
                        <button onClick={() => {updatePlaylist(prevPlaylist => prevPlaylist.filter(track => track.songID !== song.songID))}}>
                            <p>{song.songName}</p>
                            <p>{song.artist}</p>
                            <p>{song.album}</p>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}