import { hover } from "@testing-library/user-event/dist/hover";
import axios from "axios"
import React ,{useEffect,useState} from "react";
import Table  from "react-bootstrap/Table";

import './MusicTable.css'

const MusicTable = (props) => {
    const[songs,setSongs]= useState([]);

  useEffect(()=> {
    getAllSongs();
  },[])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/songs/');
    console.log(response.data)
    setSongs(response.data)
  }

    // async function updateSong(editSong){
    //     let response = await axios.put('http://127.0.0.1:8000/api/songs/', editSong)
    //     if (response.status === 200){
    //       await getAllSongs()
    //       console.log(`new song:`, updateSong);
    //     }
    //   }

    
    let musicRows= songs.map((song)=> (
        <tr>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.release_date}</td>
            <td>{song.genre}</td>
           
        </tr>
    ))
    

    return (  
        <div>
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
                {musicRows}
            </tbody>
        </table>
        </div>
    );
}
 
export default MusicTable;