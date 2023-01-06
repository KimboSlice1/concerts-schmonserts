import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"



const Artist = ({filteredArtistData, setConcerts, path = '/artists'}) => {
  
  const [singleArtistData, setSingleArtistData] = useState([])
  useEffect(() => {
    fetch(`/artists`)
    .then((r) => r.json())
    .then(setSingleArtistData)
  }, [])
  //console.log(singleArtistData.id)  


  let artistDataInfo = (filteredArtistData);
  let concertData = (setConcerts);

  const navigate = useNavigate()

  return (
    <div>

        <h1 className='artist-name'>Artists!!</h1>
         <select onChange={ e => {
          console.log(`just selected artist id: ${e.target.value}`)
         }}>
          {singleArtistData.map( singleArtistData => {
            return ( 
              <option key={singleArtistData.id} value={singleArtistData.id}>{singleArtistData.name}</option>
              )})}
         </select>
         <button onClick={ () => navigate(path)}>back</button>
        <h3 className='artist-info'>Text Box</h3>
    </div>

  )
}

export default Artist