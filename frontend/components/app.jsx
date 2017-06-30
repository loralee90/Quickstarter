import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import SessionFormContainer from './session_form/session_form_container';
import ProjectIndexContainer from './project_index/project_index_container';
import ProjectFormContainer from './project_form/project_form_container';
import ProjectShowContainer from './project_show/project_show_container';
import CategoriesContainer from './categories/categories_container';
import CategoryShowContainer from './categories/category_show_container';
import { AuthRoute, ProjectCreateRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <Route exact path="/" component={ProjectIndexContainer} />
    <Switch> 
      <ProjectCreateRoute exact path="/projects/new" component={ProjectFormContainer} />
      <Route exact path="/projects/:id" component={ProjectShowContainer} />
    </Switch>
    <Route exact path="/categories" component={CategoriesContainer} />
    <Route exact path="/categories/:id" component={CategoryShowContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
