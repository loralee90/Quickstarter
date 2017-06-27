import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute, ProjectCreateRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';
import ProjectIndexContainer from './project_index/project_index_container';
import ProjectFormContainer from './project_form/project_form_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <Route exact path="/" component={ProjectIndexContainer} />
    <ProjectCreateRoute exact path="/projects/new" component={ProjectFormContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
