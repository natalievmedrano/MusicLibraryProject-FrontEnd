import React, { useState } from "react";

const AddNewSong = (props) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [release_date, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");

function handleSubmit(event) {
    event.preventDefault();
    let createdSong = {
      title: title,
      artist: artist,
      album: album,
      release_date: release_date,
      genre: genre,
    };
    props.createSong(createdSong);
  }

  return (
    <form  onSubmit={handleSubmit}>
      <div>
        <h2>Add New Song </h2>
        <label htmlFor="">Title</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="">Artist</label>
        <input
          type="text"
          value={artist}
          onChange={(event) => setArtist(event.target.value)}
        />
        <label htmlFor="">Album</label>
        <input
          type="text"
          value={album}
          onChange={(event) => setAlbum(event.target.value)}
        />
        <label htmlFor="">Release Date</label>
        <input
          type="text"
          value={release_date}
          onChange={(event) => setReleaseDate(event.target.value)}
        />
        <label htmlFor="">Genre</label>
        <input
          type="text"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
        />
      </div>
      <button type="submit">Add Song</button>
    </form>
  );
};

export default AddNewSong;
