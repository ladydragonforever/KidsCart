import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginContainer from '../session/login_form_container';
import SignupContainer from '../session/signup_form_container';
import './modal.css'


function Modal({ modal, closeModal }) {
   if (!modal) {
      return null;
   }
   let component;
   switch (modal) {
      case 'LOGIN':
         component = <LoginContainer />;
         break;
      case 'SIGNUP':
         component = <SignupContainer />;
         break;

      default:
         return null;
   }
   return (
      <div className="modal-background" onClick={closeModal}>
         <div className="modal-child" onClick={e => e.stopPropagation()}>
            {component}
         </div>
      </div>
   );
}

const mSTP = state => {
   return {
      modal: state.ui.modal
   };
};

const mDTP = dispatch => {
   return {
      closeModal: () => dispatch(closeModal())
   };
};

export default connect(mSTP, mDTP)(Modal);