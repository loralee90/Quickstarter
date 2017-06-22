import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import DropdownContainer from './nav_bar/dropdown_container';
import { AuthRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
      <DropdownContainer />
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
