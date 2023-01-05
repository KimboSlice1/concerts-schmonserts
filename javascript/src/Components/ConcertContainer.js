import { useState, useEffect } from "react";

function ConcertsContainer({ addConcert, concerts }) {
  const [formData, setFormData] = useState({
    city: "",
    date: "",
    description: "",
    artist_id: "",
  });
  const [errors, setErrors] = useState([]);
  const [artists, setArtists] = useState([]);
  useEffect( () => {
    fetch('/artists')
    .then(r=> r.json())
    .then(setArtists)
  }, [])
  console.log(artists)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    fetch("/concerts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then(addConcert);
  };

  // console.log(concerts)

  return (
    <form onSubmit={handleSubmit}>
      <label>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Artist:
        <select
          name="artist_id"
          
          onChange={handleChange}
        >
          {/* Render options for all available artists */}
          {concerts.map((concert) => {
            if (concert.artist && concert.artist.id) {
              // added check for artist and id properties
              return (
                <option value={concert.artist.id}>{concert.artist.name}</option>
              );
            }
            return null;
          })}
        </select>
      </label>
      <br />
      {/* The user_id can be set to the current user's ID here */}
      {/* <input type="hidden" name="user_id" value={currentUser.id} /> */}
      
        <button type="submit">submit</button>
      

    </form>
    
  );
}
export default ConcertsContainer;