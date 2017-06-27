import React from 'react';
import { Link } from 'react-router-dom';
import DropdownContainer from './dropdown_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.state = {showMe: false};
  }

  componentDidMount() {
    window.addEventListener("click", this.closeDropdown);
  }

  closeDropdown() {
    this.setState({showMe: false});
  }

  toggleDropdown(e) {
    e.stopPropagation();
    this.setState({showMe: !this.state.showMe});
  }

  profileIcon() {
    if (this.props.currentUser && !this.props.currentUser.image) {
      return (
        <li onClick={this.toggleDropdown} className="dropbtn">
          <img src="assets/quickstarter_avatar" alt="User avatar"></img>
          <DropdownContainer hiddenClass={this.state.showMe ? "" : "hidden"} />
        </li>
      );
    } else {
      return "";
    }
  }

  loginLink() {
    if (this.props.currentUser) {
      return "";
    } else {
      return (
        <li className="nav-item">
          <Link to="/login">
            Log in
          </Link>
        </li>
      );
    }
  }

  signupLink() {
    if (this.props.currentUser) {
      return "";
    } else {
      return (
        <li className="nav-item">
          <Link to="/signup">
            Sign up
          </Link>
        </li>
      );
    }
  }

  render() {
    return (
      <header className="nav-bar">
        <nav className="left-nav">
          <ul>
            <li className="explore-link nav-item hidden">
              <i className="fa fa-compass"></i>
              &nbsp;&nbsp;
              <Link to="/categories">Explore</Link>
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
            {this.profileIcon()}
            {this.loginLink()}
            {this.signupLink()}
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavBar;
