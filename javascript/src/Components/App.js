import '../App.css';
import{useEffect, useState} from 'react';
import { Routes, Route} from 'react-router-dom';
import NavBar from './NavBar'
import Search from './ConcertSearch'
import HomePage from './Home'
import ConcertContainer from './ConcertContainer';
import Artist from "./Artist"
import AddArtist from './AddArtist';
import SignUp from './SignUp';
import Logout from './Logout';
import Error from './Error';

const concertsSchmonsertsURL="/concerts"

function App() {
  const [concerts, setConcerts] = useState([]);
  const [user, setUser] = useState(null)
  useEffect(()=>{
    fetch(concertsSchmonsertsURL)
      .then(r => r.json())
      .then(arrayOfData =>
        setConcerts(arrayOfData)
        )
  }, [])


  const addConcert = (concert) => setConcerts(current => [...current, concert])
  const updateUser = (user) => setUser(user)
// search filter 
const [searchText, setSearchText] = useState("")

// const filteredConcertData = concerts.filter((eachDataObj) => {
//   // console.log(eachDataObj.city)
//   return eachDataObj.city.toLowerCase().includes(searchText.toLowerCase()) ||
//          eachDataObj.description.toLowerCase().includes(searchText.toLowerCase()) 
// })

// delete concert handler
function handleDeleteConcert(id) {
  const deleteConcert = concerts.filter(concert => concert.id !== id)
  setConcerts(deleteConcert)
}
  //console.log(concerts.artist)


  const filteredArtistData = concerts.map((eachDataObj) => {
    return eachDataObj.artist
  })
    // console.log(filteredArtistData)

  // handle artist delete
return (
  
  
  <div className="App">
      <NavBar/>
        <Logout />
        <Routes>
          
          <Route path="/" 
                  element={ <HomePage />  } />
          <Route path="/Concerts"  
                  element={ <ConcertContainer concerts={concerts} addConcert={addConcert} setConcerts={setConcerts} handleDeleteConcert={handleDeleteConcert}  />}/>
          <Route path="/search" 
                  element={ <Search searchText={searchText} setSearchText={setSearchText}/>}  />
          <Route path="/Artists/*" 
                  element={<Artist filteredArtistData={filteredArtistData}  setConcerts={setConcerts}/>} /> 
          <Route path="/AddArtist" 
                  element={ <AddArtist filteredArtistData={filteredArtistData}  setConcerts={setConcerts}/> }/>
          <Route path="/signUp" 
                  element={<SignUp />} />
          {/* <Route path="*" 
                  element={<Error/>}/> */}
        </Routes>

    </div>
  );
}

export default App;
