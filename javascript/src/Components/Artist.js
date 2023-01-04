import React, {useState} from "react"

const Artist = (filteredArtistData, handleDeleteArtist, setConcerts ) => {

  const [artistData, setArtistData] = useState({
    name: "",
    genre: "",
    album: ""
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/artist", {
        method: "POST",
        header:{"Content-Type": "application/json"},
        body: JSON.stringify(artistData)
    }).then( r => r.json())
      .then(data =>{
        setConcerts([...filteredArtistData, data])
        setArtistData(data)
      })
}
const handleChange = (e) => {
  const value = e.target.value
  const name = e.target.name //key
  setArtistData({...artistData, [name]:value})
}

  return (
    <div className='Artist'>
      
      
      <h1 className='artist-name'>{Artist.id}</h1>

      <h3 className='artist-info'>Text Box</h3>


    </div>

  )
}

export default Artist