import React, {useState} from "react";
import {Routes, Route} from "react-router-dom"

  const AddArtist = (artistDataInfo, concertData, deleteArtist) => {
      
    const [artistData, setArtistData] = useState({
      name: "",
      genre: "",
      album: ""
    })
    //console.log(artistDataInfo)
    const handleSubmit = (e) => {
      e.preventDefault()
      fetch("/artist", {
          method: "POST",
          header:{"Content-Type": "application/json"},
          body: JSON.stringify(artistData)
      }).then( r => r.json())
        .then(data =>{
          setArtistData([...artistDataInfo, data])
          setArtistData(data)
        })
  }
  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name 
    setArtistData({...artistData, [name]:value})
  }
  return (
    <div>

        <h2>Artists</h2>
          <form id="Artist-form" onSubmit={handleSubmit}>
            <input className="input_field" value={artistData.name} placeholder="Name" name="name" type="text" onChange={handleChange}/>
            <input className="input_field" value={artistData.genre} placeholder="Genre" name="genre" type="text" onChange={handleChange}/>
            <input className="input_field" value={artistData.album} placeholder="Album" name="album" type="text" onChange={handleChange}/>

            <br/>
          </form>

        <h2 className='artist-name'>Killaz in the Jungle</h2>

        <h3 className='artist-info'>Text Box</h3>


    </div>

  )

  }



export default AddArtist