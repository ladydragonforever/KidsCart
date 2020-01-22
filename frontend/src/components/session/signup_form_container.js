import { connect } from 'react-redux';
import { signup, clearErrors} from '../../actions/session_actions';
import SignupForm from './signup_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
   console.log(state.session.isSignedIn)
   return {
      signedIn: state.session.isSignedIn,
      errors: state.errors.session,
      formType: 'SIGNUP',
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      signup: user => dispatch(signup(user)),
      openModal: modal => dispatch(openModal(modal)),
      closeModal: () => dispatch(closeModal()),
      clearErrors: () => dispatch(clearErrors()),
      demoLogin: (demoUser) => dispatch(signup(demoUser)).then(dispatch(closeModal())),
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(SignupForm);