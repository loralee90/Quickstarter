import { connect } from 'react-redux';
import { fetchSearchResults } from '../../actions/search_actions';
import SearchForm from './search_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return { results: state.search };
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchSearchResults: (search) => dispatch(fetchSearchResults(search))
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm));
