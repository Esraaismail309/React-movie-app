import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from './Search'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top py-3">
            <div className="container">
                <Link to='/movie-app/popularmovies/1' className="navbar-brand fw-bolder" >Movie App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link to='/movie-app/popularmovies/1' className="nav-link active" aria-current="page" >Popular</Link >
                        </li>
                        <li className="nav-item">
                            <Link to={'/movie-app/wishlist'} className="nav-link" >Wishlist</Link>
                        </li>
                        <li>
                            <Search />
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar