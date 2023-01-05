import {useState} from 'react'

function ConcertContainer({addConcert, concerts}) {
    const [formData, setFormData] = useState({
        city: "",
        date: "",
        description: ""
    })
    const [errors, setErrors] = useState([])
   
    const handleChange = (e) => {
      const {name, value} = e.target
      setFormData({ ...formData, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/concerts", {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({...formData, ongoing:true})
        })
        .then(r => r.json())
        .then(addConcert)
        
    }
  
// console.log(concerts)
        
return (
    <form onSubmit={handleSubmit}>
      <label>
        City:
        <input type="text" 
               name="city" 
               value={formData.city} 
               onChange={handleChange} />
      </label>
      <br />
      <label>
        Date:
        <input type="date" 
               name="date" 
               value={formData.date} 
               onChange={handleChange} />
      </label>
      <br />
      <label>
        Description:
        <textarea name="description" 
                  value={formData.description} 
                  onChange={handleChange} />
      </label>
      <br />
      <label>
        Artist:
        <select name="artistId" 
                value={formData.artistId} 
                onChange={handleChange}>
          {/* Render options for all available artists */}
          {concerts.map(concerts => ( 
            <option  value={concerts.artist.id}>{concerts.artist.name}</option>
          ))}
        </select>
      </label>
      <br />
      {/* The userId can be set to the current user's ID here */}
      {/* <input type="hidden" name="userId" value={currentUser.d} /> */}
      <button type="submit">Create Concert</button>
    </form>
  );
}
export default ConcertContainer