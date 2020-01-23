import { connect } from 'react-redux';
import SelectMeals from './select_meals';

const mapStateToProps = (state, ownProps) => {
   return {
      currentUser: state.session.user,
      child: state.entities.children[ownProps.match.params.childId]
   };
};

const mapDispatchToProps = dispatch => {
   return {
      fetchSelectMeals: childId => dispatch(fetchSelectMeals(childId)),
      deleteSelectMeal: (selectMealId) => dispatch(deleteSelectMeal(selectMealId)),
      addSelectMeal: mealId => dispatch(addSelectMeal(mealId)),
      fetchSearchMeals: keyword => dispatch(fetchSearchMeals(keyword)),
      fetchMeal: mealId => dispatch(fetchMeal(mealId)),
      // editSingleSelectMeal: singleSelectMealId => dispatch(editSingleSelectMeal(singleSelectMealId))'
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectMeals);