import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import {fetchSearchMeals} from '../../actions/meal_actions';

import NavBar from './navbar';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchSearchMeals: (keyword) => dispatch(fetchSearchMeals(keyword))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);