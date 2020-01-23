import { connect } from 'react-redux';
import { receiveChildGender } from '../../actions/child_actions';
import { withRouter } from 'react-router'

import BoyOrGirl from './boyOrGirl'

const mapStateToProps = state => ({
    child: state.child
});

const mapDispatchToProps = dispatch => ({
    receiveChildGender: gender => dispatch(receiveChildGender(gender))
})


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(BoyOrGirl));