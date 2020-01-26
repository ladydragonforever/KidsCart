import MealSearch from './meal_search';
import { connect } from 'react-redux';
import {
    fetchSearchMeals
    // fetchMeals,
} from '../../actions/meal_actions';

const mapStateToProps = (state, ownProps) => ({
    meals: Object.values(state.entities.meals),
    query: ownProps.match.params.query,
    url: ownProps.match.url
});

const mapDispatchToProps = dispatch => ({
    fetchSearchMeals: keyword => dispatch(fetchSearchMeals(keyword))
});


export default connect(mapStateToProps, mapDispatchToProps)(MealSearch);