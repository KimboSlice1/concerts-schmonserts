import '../App.css';
import{useEffect, useState} from 'react';
import { Routes, Route} from 'react-router-dom';
import NavBar from './NavBar'
import Search from './ConcertSearch'
import HomePage from './Home'
import ConcertContainer from './ConcertContainer';
import Artist from "./Artist"



const concertsSchmonsertsURL="/concerts"

function App() {
  const [concerts, setConcerts] = useState([]);
  useEffect(()=>{
    fetch(concertsSchmonsertsURL)
      .then(r => r.json())
      .then(arrayOfData =>
        setConcerts(arrayOfData)
        )
  }, [])

  

// search filter 
const [searchText, setSearchText] = useState("")

const filteredConcertData = concerts.filter((eachDataObj) => {
  // console.log(eachDataObj.city)
  return eachDataObj.city.toLowerCase().includes(searchText.toLowerCase()) ||
         eachDataObj.description.toLowerCase().includes(searchText.toLowerCase()) 
})

// delete concert handler
function handleDeleteConcert(id) {
  const deleteConcert = concerts.filter(concert => concert.id !== id)
  setConcerts(deleteConcert)
}
  //console.log(concerts.artist)


  const filteredArtistData = concerts.map((eachDataObj) => {
    return eachDataObj.artist
  })
    //console.log(filteredArtistData)

  // handle artist delete
    function handleDeleteArtist(id) {
      const deleteArtist = concerts.artist.filter(concert => concert.id !== id)
      setConcerts(deleteArtist)
    }
    
    
    return (
  
  
  <div className="App">
      <NavBar/>

        <Routes>
          
          <Route path="/" element={ <HomePage />  } />
       
          <Route path="/TheConcerts" element={ <ConcertContainer filteredConcertData={filteredConcertData} setConcerts={setConcerts} handleDeleteConcert={handleDeleteConcert}  />}/>
          <Route path="/search" element={ <Search searchText={searchText} setSearchText={setSearchText}/>}  />
          <Route path="/Artists" element={ <Artist filteredConcertData={filteredArtistData} handleDeleteArtist={handleDeleteArtist} setConcerts={setConcerts}/>} />
          
        </Routes>

    </div>
  );
}

export default App;
