import React, { useState } from 'react';

const FilteredSongs = ({ songs, setSongs }) => {

    const [chosenCategory, setChosenCategory] = useState()
  
    const changeFilter = (currentCategory) => {
        setChosenCategory(currentCategory)
    }

    function filterSongs(filteredSelection) {
        let filteredSongs = songs.filter((song) => song[chosenCategory] === filteredSelection);
        setSongs(filteredSongs)
    }

    return ( 
        <div onSubmit={filterSongs} className='spacing'>
            <label >Select Category to filter by</label>
            <select onChange={(event) => changeFilter(event.target.value)}
            value={chosenCategory}>
                <option value=''>All</option> 
                <option value='title'>Title</option>
                <option value='artist'>Artist</option>
                <option value='album'>Album</option>
                <option value='release_date'>Release Date</option>
                <option value='genre'>Genre</option>
            </select>
            <select  onChange={(event) => filterSongs(event.target.value)}>
            {songs.map((song) => {
                return (
                    <option>{song[chosenCategory]}</option>
                    );
                })}
            </select>
        </div>
     );
}
 
export default FilteredSongs;