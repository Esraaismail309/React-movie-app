import React, { useContext } from 'react'
import { FormattedMessage } from "react-intl";
import { Link } from 'react-router-dom'
import { Search } from './Search'
import { Context } from '../../locales/Wrapper';

const Navbar = () => {
    const locale = useContext(Context)
    const lang = locale.locale
    return (<>

        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top py-3">
            <div className="container">
                <Link to='/movie-app/popularmovies/1' className="navbar-brand fw-bolder" >Movie App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={lang === 'ar' ? "navbar-nav me-auto mb-2 mb-lg-0 " : "navbar-nav ms-auto mb-2 mb-lg-0 "}>
                        <li className="nav-item">
                            <Link to='/movie-app/popularmovies/1' className="nav-link active" aria-current="page" >
                                <FormattedMessage id='popular' />
                            </Link >
                        </li>
                        <li className="nav-item">
                            <Link to={'/movie-app/wishlist'} className="nav-link" > <FormattedMessage id='wishlist' /></Link>
                        </li>
                        <li>
                            <button className={lang === 'ar' ? " btn mx-3  border border-light btn-dark px-2" : " btn mx-1 border border-light "}

                                onClick={(e) => { locale.changeLanguage(e) }} value='ar'>Ar</button>
                        </li>
                        <li>
                            <button className={lang === 'en' ? " btn mx-1 border border-light btn-dark" : " btn mx-1 border border-light "}
                                onClick={(e) => { locale.changeLanguage(e) }} value='en'>En</button>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
        <Search />

    </>
    )
}

export default Navbar