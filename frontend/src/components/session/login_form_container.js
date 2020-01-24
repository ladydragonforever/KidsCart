import { connect } from 'react-redux';
import { login, clearErrors} from '../../actions/session_actions';
import LoginForm from './login_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
   
   // console.log("container", state.session.isAuthenticated);
   return {
      signedIn: state.session.isAuthenticated,
      errors: state.errors.session,
      formType: 'LOGIN',
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      login: user => dispatch(login(user)),
      openModal: modal => dispatch(openModal(modal)),
      clearErrors: () => dispatch(clearErrors()),
      closeModal: () => dispatch(closeModal()),
      demoLogin: (demoUser) => dispatch(login(demoUser)).then(dispatch(closeModal())),
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(LoginForm);