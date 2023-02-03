import React, {useState} from "react";

function App() {
  const[entries, setEntries]= useState([{title:'Breathe(in the air)' , artist:'Pink Floyd', album:'Dark Side of the Moon', genre:'Classic Rock', release_Date:'03/01/1973' }])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry)=> {
            return (
              <tr>
                <td>{entry.title}</td>
                <td>{entry.artist}</td>
                <td>{entry.album}</td>
                <td>{entry.genre}</td>
                <td>{entry.release_Date}</td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
