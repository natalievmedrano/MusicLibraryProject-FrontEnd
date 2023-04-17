import "./MusicTable.css";

const MusicTable = ({ songs }) => {
  let musicRows = songs.map((song, key) => (
    <tr key={key}>
      <td>{song.title}</td>
      <td>{song.artist}</td>
      <td>{song.album}</td>
      <td>{song.release_date}</td>
      <td>{song.genre}</td>
    </tr>
  ));

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
        <tbody>{musicRows}</tbody>
      </table>
    </div>
  );
};

export default MusicTable;
