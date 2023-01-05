import {useNavigate} from 'react-router-dom'

export const NavButton = ({path = '/'}) => {
    const navigate = useNavigate()
    return(
        <button onClick={ () => navigate(path)}>back</button>
    )
}