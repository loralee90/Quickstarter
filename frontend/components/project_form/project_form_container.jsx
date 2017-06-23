import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { selectAllCategories } from '../../reducers/selectors';
import { createProject } from '../../actions/project_actions';
import { fetchCategories } from '../../actions/category_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {

  return { categories: selectAllCategories(state) };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project)),
    fetchCategories: () => dispatch(fetchCategories())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectForm));
