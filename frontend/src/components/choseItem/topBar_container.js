import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import TopBar from './topBar';

const mapStateToProps = state => ({
    typeFood: state.lunchType
});

export default withRouter(connect(
    mapStateToProps,
    null
)(TopBar));