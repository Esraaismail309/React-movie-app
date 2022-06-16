import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from './Search'

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <Link to='popularmovies' className="navbar-brand fw-bolder" >Movie App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='popularmovies' className="nav-link active" aria-current="page" >Popular</Link >
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Wishlist</a>
                        </li>
                    </ul>
                    <Search />
                </div>
            </div>
        </nav>
    )
}

export default Navbar