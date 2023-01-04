import {useState} from 'react'

function ConcertContainer({filteredConcertData, setConcerts, handleDeleteConcert}) {

    const [formData, setFormData] = useState({
        city: "",
        date: "",
        description: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/concerts", {
            method: "POST",
            header:{"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        }).then( r => r.json())
          .then(data =>{
            setConcerts([...filteredConcertData, data])
            setFormData(data)
          })
    }
    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name //key
        setFormData({...formData, [name]:value})
    }

    return(
        <div>
                 <h2>Concerts</h2>

<h3>Add a Concert!</h3>
<form id="form" onSubmit={handleSubmit}>
    <input className="input_field" value={formData.city} placeholder="City" name="city" type="text" onChange={handleChange} />
    <input className="input_field" value={formData.date} placeholder="Date" name="date" type="number" onChange={handleChange} />
    <input className="input_field" value={formData.description} placeholder="Description" name="description" type="number" onChange={handleChange} />
   
    <br/>
</form>
        </div>
    )
}
export default ConcertContainer