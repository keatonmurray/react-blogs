import React from 'react'
import NavLinks from './NavLinks'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {

    const location = useLocation();
    const linkColor = location.pathname === '/' ? 'text-white' : 'text-dark';

  return (
    <div>
        <nav id="nav" className="navbar navbar-expand-lg bg-transparent rounded py-3" aria-label="Eleventh navbar example">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center py-3" id="navbarsExample09">
                    <Link className={`navbar-brand text-uppercase fw-bold ${linkColor}`} to="/">React Blogs</Link>
                    <NavLinks />
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav
