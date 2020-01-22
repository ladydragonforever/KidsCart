import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import Home from './home';

const mapStateToProps = (state) => {
    return {
        requireLogin: state.session.isAuthenticated
    };
};



export default withRouter(connect(
    mapStateToProps,
    null
)(Home));