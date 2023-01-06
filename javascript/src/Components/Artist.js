import React, {useState, useEffect, useParams} from "react"
import { Route, Routes, useNavigate, createSearchParams } from "react-router-dom"
import { redirect } from "react-router-dom"
import ArtistCard from './ArtistCard'

  //const [routeId] = useState(true)
  const Artist = ({filteredArtistData, setConcerts, path = '/Artists'}) => {
  // const params = useParams();


  const [singleArtistData, setSingleArtistData] = useState([])
  useEffect(() => {
    fetch(`/artists/`)
    .then((r) => r.json())
    .then(setSingleArtistData)
  }, [])
  // let artistDataInfo = (filteredArtistData);
  // let concertData = (setConcerts);

  const navigate = useNavigate()
  // const search = useLocation().search;
  // const id = new URLSearchParams(search).get("id");
  //const params = ()
  console.log()
  const goToArtistId = () =>
    navigate({
      pathname: "/artists",
      })

  
  return (
    <div>

{/* 
      <Routes>
        <Route path="/artist:id" element={`artist${:id}`}/>
      </Routes> */}

        <h1 className='artist-name'>Artists!!</h1>
         <select onChange={goToArtistId}             >
          {singleArtistData.map( singleArtistData => {
            return ( 
              <option
                key={singleArtistData.id} 
                value={singleArtistData.id}>
                  {singleArtistData.name}
              </option>)})}
          </select>
         <button onClick={ () => navigate(path)}>back</button>

         <ArtistCard singleArtistData={singleArtistData}/>
        <h3 className='artist-info'></h3>
    </div>

  )
}

export default Artist