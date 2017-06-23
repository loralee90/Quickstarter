import { connect } from 'react-redux';
import ProjectIndex from './project_index';
import { fetchProjects } from '../../actions/project_actions';
import { selectAllProjects } from '../../reducers/selectors';

const mapStateToProps = state => {
  return { projects: selectAllProjects(state) };
};

const mapDispatchToProps = dispatch => {
  
  return { fetchProjects: () => dispatch(fetchProjects()) }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);
