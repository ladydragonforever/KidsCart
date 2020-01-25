import { connect } from 'react-redux';
import SelectMeals from './select_meals';
import { fetchSelectMeals, deleteSelectMeal, addSelectMeal, createSelectMeals } from '../../actions/select_meals_actions';
import { fetchMeal, fetchSearchMeals } from '../../actions/meal_actions';

const mapStateToProps = (state, ownProps) => {
   // if(!state.seesion) return null;
   if (!state.entities.selectMeals) return null;
   console.log(state.entities.selectMeals, "container test")
   return {
      currentUser: state.session.user,
      selectMeals: Object.values(state.entities.selectMeals),
      meals: Object.values(state.entities.meals),
   };
};

const mapDispatchToProps = dispatch => {
   return {
      fetchSelectMeals: childId => dispatch(fetchSelectMeals(childId)),
      deleteSelectMeal: (childId, mealId) => dispatch(deleteSelectMeal(childId, mealId)),
      addSelectMeal: (childId, mealId) => dispatch(addSelectMeal(childId, mealId)),
      fetchSearchMeals: keyword => dispatch(fetchSearchMeals(keyword)),
      fetchMeal: mealId => dispatch(fetchMeal(mealId)),
      createSelectMeals: (childId, meal) => dispatch(createSelectMeals(childId, meal)),
      // editSingleSelectMeal: singleSelectMealId => dispatch(editSingleSelectMeal(singleSelectMealId))'
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectMeals);