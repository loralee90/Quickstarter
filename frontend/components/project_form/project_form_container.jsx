import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { selectAllCategories } from '../../reducers/selectors';
import { createProject } from '../../actions/project_actions';
import { withRouter } from 'react-router-dom';
import { fetchCategories } from '../../actions/category_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = state => {
  return {
    categories: selectAllCategories(state),
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project)),
    fetchCategories: () => dispatch(fetchCategories()),
    clearErrors: () => dispatch(clearErrors()) 
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProjectForm)
);
