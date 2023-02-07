import axios from "axios"
import React ,{useEffect,useState} from "react";


const MusicTable = (props) => {
    const[]= useState([{} ]);

  useEffect(()=> {
    getAllSongs();
  },[])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/songs/');
    console.log(response.data)
  }

    async function updateSong(editSong){
        let response = await axios.put('http://127.0.0.1:8000/api/songs/', editSong)
        if (response.status === 200){
          await getAllSongs()
          console.log(`new song:`, updateSong);
        }
      }

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
                    <button onClick={updateSong}>EDIT SONGS</button>
                </tr>
                
            </tfoot>
        </table>
    );
}
 
export default MusicTable;