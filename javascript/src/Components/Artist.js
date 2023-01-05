import React, {useState} from "react"
import AddArtist from "./AddArtist"
import { Route, Routes } from "react-router-dom"
// import AddArtist from "/addArtist"

const Artist = ({filteredArtistData, handleDeleteArtist, setConcerts}) => {
  let deleteArtist = (handleDeleteArtist);
  let artistDataInfo = (filteredArtistData);
  let concertData = (setConcerts);

//console.log(concertData)


  return (
    <div>

        <h2 className='artist-name'>Killaz in the Jungle</h2>

        <h3 className='artist-info'>Text Box</h3>
    </div>

  )
}

export default Artist