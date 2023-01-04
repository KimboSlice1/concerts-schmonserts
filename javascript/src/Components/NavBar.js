import {NavLink} from 'react-router-dom'

function NavBar() {
    return(
        <div className="navbar">
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
        </div>
    )
}

export default NavBar