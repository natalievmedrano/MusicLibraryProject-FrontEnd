import React, {useEffect, useState} from "react";
import axios from "axios";
import MusicTable from "./Components/MusicTable/MusicTable";
import NavigationBar from "./Components/NavigationBar/NavigationBar";

function App() {
  const[songs, setSongs]= useState([{title: 'Breathe(in the Air)' ,artist: 'Pink Floyd', album: 'Dark Side of the Moon', release_Date: '03-01-1973', genre:'Classic Rock'} ]);

  useEffect(()=> {
    getAllSongs();
  },[])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/songs/');
    setSongs(response.data)
  }

  //async function createSong(newSong){
    //let response = await axios.post('http://127.0.0.1:8000/api/songs/', newSong);
    //if(response.status === 201){
      //await getAllSongs();
    //}
 // }
  
    return (
      <div>
        <NavigationBar/>
            <MusicTable parentSong={songs}/></div>
    )
}

export default App;
