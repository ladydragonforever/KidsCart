import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router'

import NavBar from './navbar';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
   logout: () => dispatch(logout()),
   openModal: modal => dispatch(openModal(modal)),
   demoLogin: (demoUser) => dispatch(login(demoUser))
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(NavBar);