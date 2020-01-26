import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_action'
import { deleteAChild } from '../../actions/child_actions'
import { withRouter } from 'react-router'

import UserHome from './user_home';

const mapStateToProps = state => ({
    userId: state.session.user.id,
    user: state.entities.user.data
});

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    deleteAChild: childId => dispatch(deleteAChild(childId))
})


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(UserHome));