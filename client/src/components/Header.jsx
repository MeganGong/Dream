import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
<nav className="navbar navbar-expand-lg navbar-light ">
  <Link className="navbar-brand" to="/">DREAM</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/profile">My Profile</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/todo">Todo List</Link>
      </li>
    </ul>
    <ul className="navbar-nav my-2 my-lg-0">
      <li className="nav-item">
        <Link className="nav-link" to="/login">Log in</Link>                
      </li>
    </ul>
  </div>
</nav>
);
export default Header;