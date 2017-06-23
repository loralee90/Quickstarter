import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { selectAllCategories } from '../../reducers/selectors';
import createProject from '../../actions/project_actions';

const mapStateToProps = state => {
  return { categories: selectAllCategories(state) };
};

const mapDispatchToProps = dispatch => {
  return { createProject: (project) => dispatch(createProject(project)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
