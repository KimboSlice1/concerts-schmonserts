import {NavLink} from 'react-router-dom'

function NavBar() {
    return(
        <div className="navbar">
            <h1 className='nav-title'>Concert Schmconcert</h1>
            <NavLink className='nav-links' to="/">
                Home
            </NavLink>
            <NavLink className='nav-links' to="/Concerts">
                Concerts
            </NavLink>
            <NavLink className='nav-links' to="/Artists">
                Artists
            </NavLink>
        </div>
    )
}

export default NavBar