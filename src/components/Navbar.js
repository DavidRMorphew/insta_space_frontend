import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const active = {
        background: "black",
        color: "lightgray"
    }

    return(
        <div>
            <NavLink
                to="/explore"
                className="navlink"
                activeStyle={active}
            >
                Explore
            </NavLink>
            <NavLink
                to="/home"
                className="navlink"
                activeStyle={active}
            >
                Home
            </NavLink>
        </div>
    )

}

export default Navbar