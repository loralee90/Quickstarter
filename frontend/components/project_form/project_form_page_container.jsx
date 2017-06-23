import { connect } from 'react-redux';
import ProjectFormPage from './project_form_page';
import { selectAllCategories } from '../../reducers/selectors';
import createProject from '../../actions/project_actions';

const mapStateToProps = state => {
  return { categories: selectAllCategories(state) };
};

const mapDispatchToProps = dispatch => {
  return { createProject: (project) => dispatch(createProject(project)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectFormPage);
