// Packages
import React, { useContext } from "react"
import { Link, NavLink } from "react-router-dom"

// Components
import { AuthContext } from "../../context/auth"

// Data
import SiteData from "../data/SiteData"

function Header() {
    const { isLoggedIn, logoutUser } = useContext(AuthContext)

    return (
        <header>
            <Link to="/">{SiteData.Name}</Link>

            <nav>
                <NavLink to="/">Home</NavLink>

                {isLoggedIn ? (
                    <>
                        <NavLink to="/my-account">My account</NavLink>
                        <button onClick={logoutUser}>Log out</button>
                    </>
                ) : (
                    <>
                        <NavLink to="/login">Login</NavLink>
                    </>
                )}
            </nav>
        </header>
    )
}

export default Header
