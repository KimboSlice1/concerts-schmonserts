import React, {useState, useEffect} from "react"



const Artist = ({filteredArtistData, setConcerts}) => {
  
  const [singleArtistData, setSingleArtistData] = useState([])
  useEffect(() => {
    fetch(`/artists`)
    .then((r) => r.json())
    .then(setSingleArtistData)
  }, [])
  console.log(singleArtistData.id)  


  let artistDataInfo = (filteredArtistData);
  let concertData = (setConcerts);



  return (
    <div>

        <h1 className='artist-name'>Artists!!</h1>
         <select>
          {singleArtistData.map( singleArtistData => {
            return ( 
              <option key={singleArtistData.id} value={singleArtistData.id}>{singleArtistData.name}</option>
            )
          })}
         </select>
        <h3 className='artist-info'>Text Box</h3>
    </div>

  )
}

export default Artist