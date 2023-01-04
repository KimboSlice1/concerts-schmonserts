import '../App.css';
import{useEffect, useState} from 'react';
import { Routes, Route} from 'react-router-dom';
import NavBar from './NavBar'
import Search from './ConcertSearch'
import homePage from './Home'
import ConcertContainer from './ConcertContainer';



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
  return eachDataObj.city.toLowerCase().includes(searchText.toLowerCase())
})

// delete handler
function handleDeleteConcert(id) {
  const deleteConcert = concerts.filter(concert => concert.id !== id)
  setConcerts(deleteConcert)
}

return (
  
  
  <div className="App">
      <NavBar/>

        <Routes>
          
          <Route path="/" element={homePage} />
       
          <Route path="/TheConcerts" element={ <ConcertContainer filteredConcertData={filteredConcertData} setConcerts={setConcerts} handleDeleteConcert={handleDeleteConcert}  />}/>
          <Route path="/search" element={ <Search searchText={searchText} setSearchText={setSearchText}/>}  />
          
          
      
          <Route path="/Artists" element />
          
        </Routes>

    </div>
  );
}

export default App;
