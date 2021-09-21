import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return(
        <div>
            <NavLink
                to="/explore"
                className="navlink"
            >
                Explore
            </NavLink>
            <NavLink
                to="/home"
                className="navlink"
            >
                Home
            </NavLink>
        </div>
    )

}

export default Navbar