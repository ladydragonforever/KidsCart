import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { openModal } from '../../actions/modal_actions';

import Home from './home';

const mapStateToProps = (state) => {
    return {
        requireLogin: state.session.isAuthenticated
    };
};

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
})

export default withRouter(connect(
    mapStateToProps,
    mDTP
)(Home));