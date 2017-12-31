import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signUp, login } from '../../actions/session/session_actions';

const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.location.pathname === '/signup' ? 'signup' : 'login';
  const errors = ownProps.location.pathname === '/signup' ? state.errors.signUp.errors : state.errors.session.errors;
  
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: errors,
    formType: formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname === '/signup' ? 'signup' : 'login';
  const action = formType === 'signup' ? signUp : login;

  return {
    processForm: (user) => dispatch(action(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);