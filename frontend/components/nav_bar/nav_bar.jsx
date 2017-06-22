import React from 'react';
import { Link } from 'react-router-dom';

const renderDropdown = () => {
  document.getElementById("dropdown-container").classList.toggle("show");
  // document.getElementById("dropdown-container").classList.toggle("hidden");
}

const onClick = (e) => {
  if (!e.currentTarget.matches('.dropbtn')) {
    const dropdown = document.getElementByClassName("dropdown-body");

    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
}

window.onClick = onClick;

const profileIcon = (currentUser) => {
  return currentUser ? <li onClick={renderDropdown} className="dropbtn">Profile Icon</li> : "";
};

const loginLink = (currentUser) => {
  return currentUser ? "" : <li className="nav-item"><Link to="/login">Log in</Link></li>
}

const signupLink = (currentUser) => {
  return currentUser ? "" : <li className="nav-item"><Link to="/signup">Sign up</Link></li>
}

const NavBar = ({ currentUser, logout }) => {
  return (
    <header className="nav-bar">
      <nav className="left-nav">
        <ul>
          <li className="explore-link nav-item hidden">
            <i className="fa fa-compass"></i>
            &nbsp;&nbsp;
            <span>Explore</span>
          </li>
          <li className="start-project-link nav-item">
            <Link to="/projects/new">Start a project</Link>
          </li>
        </ul>
      </nav>

      <Link to="/">
        <p className="logo-quick">QUICK</p>
        <p className="logo-starter">STARTER</p>
      </Link>

      <nav className="right-nav">
        <ul>
          <li>
            <i className="fa fa-search"></i>
          </li>
          {profileIcon(currentUser)}
          {loginLink(currentUser)}
          {signupLink(currentUser)}
          <li>
            <button className="header-button" onClick={logout}>Log Out</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
