import { connect } from 'react-redux';
import { receiveChildName, receiveChildAge } from '../../actions/child_actions';
import { withRouter } from 'react-router'

import DetailForm from './detail_form'

const mapStateToProps = state => ({
    child: state.child
});

const mapDispatchToProps = dispatch => ({
    receiveChildName: name => dispatch(receiveChildName(name)),
    receiveChildAge: age => dispatch(receiveChildAge(age))
})


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailForm));