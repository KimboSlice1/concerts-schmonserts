import React, { useState } from "react";

const AddArtist = ({ filteredArtistData }) => {
  const [artistData, setArtistData] = useState({
    name: "",
    genre: "",
    album: "",
  });

  //console.log(filteredArtistData);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/artists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(artistData),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setArtistData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setArtistData({ ...artistData, [name]: value });
  };

  return (
    <div>
      <h2>Artists</h2>
      <form id="Artist-form" onSubmit={handleSubmit}>
        <input
          className="input_field"
          value={artistData.name}
          placeholder="Name"
          name="name"
          type="text"
          onChange={handleChange}
        />
        <input
          className="input_field"
          value={artistData.genre}
          placeholder="Genre"
          name="genre"
          type="text"
          onChange={handleChange}
        />
        <input
          className="input_field"
          value={artistData.album}
          placeholder="Album"
          name="album"
          type="text"
          onChange={handleChange}
        />
        <button type="submit">submit</button>
        <br />
      </form>
    </div>
  );
};

export default AddArtist;
