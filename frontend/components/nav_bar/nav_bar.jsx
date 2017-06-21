import React from 'react';
import { Link } from 'react-router-dom';

const profileIcon = (currentUser) => {
  return currentUser ? <li>Profile Icon</li> : "";
};

const loginLink = (currentUser) => {
  return currentUser ? "" : <li><Link to="/login">Log in</Link></li>
}

const signupLink = (currentUser) => {
  return currentUser ? "" : <li><Link to="/signup">Sign up</Link></li>
}

const NavBar = ({ currentUser, logout }) => {
  return (
    <header className="nav-bar">
      <nav className="left-nav">
        <ul>
          <li id="explore-link">
            <i className="fa fa-compass"></i>
            &nbsp;
            <span>Explore</span>
          </li>
          <li id="start-project-link">
            <Link to="/projects/new">Start a project</Link>
          </li>
        </ul>
      </nav>

      <Link to="/">
        <img className="nav-logo" src="images/kickstarter-logo-light.png" alt="Kickstarter"></img>
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
