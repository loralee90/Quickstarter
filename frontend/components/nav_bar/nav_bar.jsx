import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign up!</Link>
  </nav>
);

const personalNavBar = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.name}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const NavBar = ({ currentUser, logout }) => (
  currentUser ? personalNavBar(currentUser, logout) : sessionLinks()
);

export default NavBar;
