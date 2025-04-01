import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const NavLinks = () => {
  const location = useLocation();
  const linkColor = location.pathname === '/' ? 'text-white' : 'text-dark';

  return (
    <div>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${linkColor}`} aria-current="page" to="/" >Home</Link>
        </li>
        <li className="nav-item">
            <Link className={`nav-link ${linkColor}`} aria-current="page" to="/blogs" >Explore Cool Blogs</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
