import MealItem from './meal_item';
import { connect } from 'react-redux';
import {fetchMeal} from '../../actions/meal_actions';


const mapStateToProps = (state, ownProps) => ({
    meal: state.entities.meals[ownProps.match.params.mealId]
})

const mapDispatchToProps = dispatch => ({
    fetchMeal: mealId => dispatch(fetchMeal(mealId))
})

export default connect(mapStateToProps, mapDispatchToProps)(MealItem);
