

const MusicTable = (props) => {
    return (  
        <table>
            <thead>
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
                            <button>EDIT SONG</button>
                            <button>DELETE SONG</button>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot> <h3>ADD A SONG</h3>
                <tr>
                    <td>Title <input type="title" /></td>
                    <td>Artist <input type="artist" /></td>
                    <td>Album <input type="album" /></td>
                    <td>Release Date <input type="release date" /></td>
                    <td>Genre <input type="genre" /> <button>ADD SONG</button></td>
                </tr>
                
            </tfoot>
        </table>
    );
}
 
export default MusicTable;