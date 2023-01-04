import React, {useState} from "react"
import AddArtist from "./AddArtist"
import { Route, Routes } from "react-router-dom"
// import AddArtist from "/addArtist"

const Artist = (filteredArtistData, handleDeleteArtist, setConcerts) => {
let deleteArtist = (handleDeleteArtist);
let artistData = (filteredArtistData);
let concertData = (setConcerts);

console.log(artistData)


  return (
    <div>

        <h2 className='artist-name'>Killaz in the Jungle</h2>

        <h3 className='artist-info'>Text Box</h3>
        <Routes>
          <Route path="/AddArtist" element={ <AddArtist  filteredArtistData={artistData} setArtist={concertData} handleDeleteArtist={deleteArtist}/> }/>
        </Routes>
    </div>

  )
}

export default Artist