import { connect } from 'react-redux';
import SelectMeals from './select_meals';

const mapStateToProps = (state) => {
   return {
      currentUser: state.session.user
   };
};

const mapDispatchToProps = dispatch => {
   return {

   };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectMeals);