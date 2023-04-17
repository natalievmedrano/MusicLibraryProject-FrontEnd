import React, { useEffect, useState } from "react";
import axios from "axios";
import MusicTable from "./Components/MusicTable/MusicTable";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import "./App.css";
import FilteredSongs from "./Components/FilterSongs/SearchBar";
import AddNewSong from "./Components/AddNewSong/AddNewSong";
function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    let response = await axios.get("http://127.0.0.1:8000/api/songs/");
    console.log(`ALL SONGS:`, response.data);
    setSongs(response.data);
  }

  async function createSong(newSong) {
    let response = await axios.post(
      "http://127.0.0.1:8000/api/songs/",
      newSong
    );
    if (response.status === 201) {
      await getAllSongs();
    }
  }

  return (
    <div id="body">
      <NavigationBar />
      <FilteredSongs songs={songs} setSongs={setSongs}  />
      <button onClick={getAllSongs}>
        Reset Filter
      </button>
      <MusicTable songs={songs} /> <AddNewSong createSong={createSong} />
    </div>
  );
}

export default App;
