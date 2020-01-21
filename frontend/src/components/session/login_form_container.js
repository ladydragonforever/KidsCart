import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
   return {
      errors: state.errors.session,
      formType: 'LOGIN',
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      login: user => dispatch(login(user)),
      openModal: modal => dispatch(openModal(modal)),
      closeModal: () => dispatch(closeModal()),
      demoLogin: (demoUser) => dispatch(login(demoUser)).then(dispatch(closeModal())),
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(LoginForm);