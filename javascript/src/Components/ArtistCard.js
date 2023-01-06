import React from "react";
import { useState } from "react";

  const ArtistCard = ({singleArtistData}) => {
    //console.log(singleArtistData)
    
    return(
      <div>
        <div className="Artist Info"></div>
        <h1>{singleArtistData.name}</h1>



      </div>



    )
  }

export default ArtistCard
