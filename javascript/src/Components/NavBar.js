import {NavLink} from 'react-router-dom'

function NavBar() {
    return(
        <div className="navbar">
            <button type="submit">logout</button>
            <h1 className='nav-title'>Concert Schmconcert</h1>
            <NavLink className='nav-links' to="/">
                Home
            </NavLink>
            <NavLink className='nav-links' to="/TheConcerts">
                Concerts
            </NavLink>
            <NavLink className='nav-links' to="/Artists">
                Artists
            </NavLink>
            <NavLink className='nav-links' to="/Search">
                Search for Concerts
            </NavLink>
            <NavLink className='nav-link' to="/AddArtist">
                Add an Artist
            </NavLink>
        </div>
    )
}

export default NavBar