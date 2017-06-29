import { connect } from 'react-redux';
import { fetchCategoryProjects } from '../../actions/category_actions';
import CategoryShow from './category_show';

const mapStateToProps = (state, ownProps) => {
  const category = state.categories[ownProps.match.params.id];
  let projects = [];

  if (category && category.project_ids) {
    projects = category.project_ids.map(projectId => state.projects[projectId]);
  }

  return { category, projects };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategoryProjects: id => dispatch(fetchCategoryProjects(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryShow);
