import { connect } from 'react-redux';
import { receiveLunchType } from '../../actions/lunch_type_actions';
import { receiveChildCategory, receiveChildIngredient } from '../../actions/child_actions'
import { withRouter } from 'react-router'

import Box from './box';

const mapStateToProps = state => ({
    type: state.ui.lunchType
});

const mapDispatchToProps = dispatch => ({
    changeType: type => dispatch(receiveLunchType(type)),
    receiveChildCategory: category => dispatch(receiveChildCategory(category)),
    receiveChildIngredient: ingredient => dispatch(receiveChildIngredient(ingredient))
})


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Box));