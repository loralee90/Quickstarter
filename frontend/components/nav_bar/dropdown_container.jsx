import { connect } from 'react-redux';
import Dropdown from './dropdown';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return { logout: () => dispatch(logout()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
