import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div>
    <header>
      <h1>Quickstarter</h1>
      <NavBarContainer />
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
