import MealSearch from './meal_search';
import { connect } from 'react-redux';
import {
    fetchSearchMeals,
    clearMeals
    // fetchMeals,
} from '../../actions/meal_actions';

const mapStateToProps = (state, ownProps) => ({
    meals: Object.values(state.entities.meals),
    query: ownProps.match.params.query,
    url: ownProps.match.url
});

const mapDispatchToProps = dispatch => ({
    fetchSearchMeals: keyword => dispatch(fetchSearchMeals(keyword)),
    clearMeals: () => dispatch(clearMeals())
});


export default connect(mapStateToProps, mapDispatchToProps)(MealSearch);