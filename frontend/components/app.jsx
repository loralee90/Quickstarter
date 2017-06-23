import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';
import ProjectIndexContainer from './project_index/project_index_container';
import ProjectFormPageContainer from './project_form/project_form_page_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <Route exact path="/" component={ProjectIndexContainer} />
    <Route exact path="/projects/new" component={ProjectFormPageContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
