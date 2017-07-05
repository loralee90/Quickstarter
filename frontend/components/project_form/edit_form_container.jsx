import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { selectAllCategories } from '../../reducers/selectors';
import { updateProject, fetchProject } from '../../actions/project_actions';
import { withRouter } from 'react-router-dom';
import { fetchCategories } from '../../actions/category_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (state, ownProps) => {
  const project = state.projects[ownProps.match.params.id];
  let rewards = [];
  if (project && project.reward_ids) {
    rewards = project.reward_ids.map(rewardId => state.rewards[rewardId]);
  }

  return {
    categories: selectAllCategories(state),
    errors: state.errors,
    project,
    rewards
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateProject: (id, project) => dispatch(updateProject(id, project)),
    fetchCategories: () => dispatch(fetchCategories()),
    clearErrors: () => dispatch(clearErrors()),
    fetchProject: id => dispatch(fetchProject(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProjectForm)
);
