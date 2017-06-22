import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ currentUser, logout, hiddenClass }) => {
  return (
     <ul id="dropdown-body" className={`dropdown-content ${hiddenClass}`} onClick={(e) => e.stopPropagation()}>
       <li>
         <Link to="/users/id/edit">Edit Profile</Link>
       </li>
       <li className="logout">
       You're signed in as {currentUser.name}&nbsp;
       <button onClick={logout}>Log Out</button>
       </li>
     </ul>
 );
};

export default Dropdown;
