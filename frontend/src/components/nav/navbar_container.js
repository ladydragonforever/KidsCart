import { connect } from 'react-redux';
import {fetchSearchMeals} from '../../actions/meal_actions';
import { logout, login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';


import NavBar from './navbar';

const mapStateToProps = state => ({
    
    loggedIn: state.session.isAuthenticated || state.session.isSignedIn
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchSearchMeals: (keyword) => dispatch(fetchSearchMeals(keyword)),
    openModal: modal => dispatch(openModal(modal)),
    demoLogin: (demoUser) => dispatch(login(demoUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
