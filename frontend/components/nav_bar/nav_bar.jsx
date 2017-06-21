import React from 'react';
import { Link } from 'react-router-dom';

const rightNav = (currentUser) => {
  if (currentUser) {
    return <li>Profile Icon</li>;
  } else {
    return (
      <div>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
      </div>
    );
  }
};

const NavBar = ({ currentUser }) => {
  return (
    <header className="nav-bar">
      <nav className="left-nav">
        <ul>
          <li id="explore-link">
            <i className="fa fa-compass"></i>
            <span>Explore</span>
          </li>
          <li id="start-project-link">
            <Link to="/projects/new">Start a project</Link>
          </li>
        </ul>
      </nav>

      <nav className="nav-logo">QUICKSTARTER</nav>

      <nav className="right-nav">
        <ul>
          <li>
            <i className="fa fa-search"></i>
          </li>
          {rightNav(currentUser)}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
