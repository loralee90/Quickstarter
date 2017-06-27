import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProjectShow from './project_show';
import { fetchProject } from '../../actions/project_actions';
import { selectAllProjects } from '../../reducers/selectors';

const mapStateToProps = state => {
  return { projects: selectAllProjects(state) };
};

const mapDispatchToProps = dispatch => {
  return { fetchProject: () => dispatch(fetchProject()) };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow));
