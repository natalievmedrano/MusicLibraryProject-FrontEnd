import React, {useEffect, useState} from "react";
import axios from "axios";
import MusicTable from "./Components/MusicTable/MusicTable";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import './App.css'
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  const[songs, setSongs]= useState([{title: 'Breathe(in the Air)' ,artist: 'Pink Floyd', album: 'Dark Side of the Moon', release_Date: '03-01-1973', genre:'Classic Rock'} ]);
  const[filteredMusic,setFilteredMusic]= useState(songs)
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(()=> {
    getAllSongs();
  },[])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/songs/');
    console.log(`ALL SONGS:`,response.data)
    setSongs(response.data)
  }

  async function createSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/api/songs/', newSong);
    if(response.status === 201){
      await getAllSongs();
    }
  }


  const handleSearch = () => {
    const filteredMusic = songs.filter((song) =>
      song.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    setFilteredMusic(filteredMusic);
  };
  
  
    return (
      <div id="body">
        {/* <NavigationBar/> <button onClick={getAllSongs}>ALL SONGS</button> */}
        <SearchBar
        value={searchKeyword}
        onChange={setSearchKeyword}
        onSubmit={handleSearch}
      />
            <MusicTable parentSong={songs}/> <button onClick={createSong}>ADD SONG</button> </div>
    )
}

export default App;
