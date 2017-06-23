import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ currentUser, logout, hiddenClass }) => {
  return (
     <ul id="dropdown" className={`dropdown-content ${hiddenClass}`} onClick={(e) => e.stopPropagation()}>
       <div className="dropdown-body">
         <li className="dropdown-item">
           <Link to="/users/id/edit">Edit Profile</Link>
         </li>
       </div>
       <li className="logout">
         You're logged in as <p>{currentUser.name}</p>&nbsp;&nbsp;
         <button onClick={logout}>Log Out</button>
       </li>
     </ul>
 );
};

export default Dropdown;
