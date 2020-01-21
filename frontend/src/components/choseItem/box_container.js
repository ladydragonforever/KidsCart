import { connect } from 'react-redux';
import { receiveLunchType } from '../../actions/lunch_type_actions';
import { withRouter } from 'react-router'

import Box from './box';

const mapStateToProps = state => ({
    type: state.ui.lunchType
});

const mapDispatchToProps = dispatch => ({
    changeType: type => dispatch(receiveLunchType(type))
})


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Box));