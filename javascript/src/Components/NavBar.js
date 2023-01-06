import {NavLink} from 'react-router-dom'

function NavBar() {
    return(
        <div className="navbar">
            
            <h1 className='nav-title'></h1>
            <div className='all-nav-links'>
            <NavLink className='nav-links' to="/">
                Home
            </NavLink>
            <NavLink className='nav-links' to="/SignUp">
                SignUp
            </NavLink>
            <NavLink className='nav-links' to="/Concerts">
                Concerts
            </NavLink>
            <NavLink className='nav-links' to="/Artists">
                Artists
            </NavLink>
            <NavLink className='nav-links' to="/Search">
                Search for Concerts
            </NavLink>
            <NavLink className='nav-links' to="/AddArtist">
                Add an Artist
            </NavLink>
            </div>
        </div>
    )
}

export default NavBar