import { connect } from 'react-redux';
import { receiveChildIngredient, createAChild } from '../../actions/child_actions'
import { withRouter } from 'react-router'

import ChoseItemIndex from './choseItemIndex';

const mapStateToProps = state => ({
    user: state.session.user,
    type: state.ui.lunchType,
    child: state.entities.child
});

const mapDispatchToProps = dispatch => ({
    receiveChildIngredient: ingredient => dispatch(receiveChildIngredient(ingredient)),
    createAChild: (child,userID) => dispatch(createAChild(child,userID))
})


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ChoseItemIndex));