import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ logout }) => {
  return (
    <div id="dropdown-container" className="dropdown hidden">
     <ul id="dropdown-body" className="dropdown-content">
       <li>
         <Link to="/users/id/edit">Edit Profile</Link>
       </li>
       <li className="logout">
       You're signed in as {currentUser.name}&nbsp;
       <button onClick={logout}>Log Out</button>
       </li>
     </ul>
   </div>
 );
};

export default Dropdown;
