import { connect } from 'react-redux';
import {fetchSearchMeals} from '../../actions/meal_actions';
import { fetchUser } from '../../actions/user_action'
import { logout, login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router'


import NavBar from './navbar';

const mapStateToProps = state => ({ 
    loggedIn: state.session.isAuthenticated || state.session.isSignedIn,
    // userId: state.session.user.id,
    // user: state.entities.user.data
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchSearchMeals: (keyword) => dispatch(fetchSearchMeals(keyword)),
    openModal: modal => dispatch(openModal(modal)),
    demoLogin: (demoUser) => dispatch(login(demoUser)),
    // fetchUser: userId => dispatch(fetchUser(userId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
