

const MusicTable = (props) => {
    return (  
        <table>
            <thead> MUSIC LIBRARY
                <tr>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Release Date</th>
                <th>Genre</th>
                </tr>
            </thead>
            <tbody>
                {props.parentSong.map((song)=>{
                    return(
                        <tr>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_Date}</td>
                            <td>{song.genre}</td>
                        </tr>
                    )
                }
                    )}
            </tbody>
        </table>
    );
}
 
export default MusicTable;