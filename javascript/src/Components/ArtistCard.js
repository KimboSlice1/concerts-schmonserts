import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


  
  const ArtistCard = ({singleArtistData}) => {
    // const [artistCard, setArtistCard] = useState()

    // useEffect(() => {
    //   fetch(`/artists/${id}`)
    //   .then((r) => r.json())
    //   .then(setArtistCard)
    // }, [])
    
    
    console.log(singleArtistData)
    // const params = useParams()
    singleArtistData = []
    
    return(
      <div>
          <h1>Artist stuff</h1>



      </div>



    )
  }

export default ArtistCard
