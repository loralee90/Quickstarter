import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, logout, signup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = ({ session, errors }) => ({
  loggedIn: Boolean(session.currentUser),
  errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    clearErrors: () => dispatch(clearErrors()),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
