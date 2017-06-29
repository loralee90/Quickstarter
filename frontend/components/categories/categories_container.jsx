import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/category_actions';
import { selectAllCategories } from '../../reducers/selectors';
import Categories from './categories';

const mapStateToProps = state => {
  return { categories: selectAllCategories(state) };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
