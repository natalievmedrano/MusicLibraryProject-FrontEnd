import React, { useState } from "react";

const AddNewSong = ({props}) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [release_date, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");

function handleSubmit(event) {
    event.preventDefault();
    let newSong = {
        title: title,
        artist: artist,
        album: album,
        release_date: release_date,
        genre: genre,
    };
        props.newSong(newSong)
}


  return (
    <form action="">
        <h2>Add New Song </h2>
        <label htmlFor="">Title</label>
      <input type="text"  onSubmit={handleSubmit} value={title} onChange={(event) => setTitle(event.target.value)}/>
    </form>
  );
};

export default AddNewSong;
