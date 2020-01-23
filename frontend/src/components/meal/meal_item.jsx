import React from 'react';

class MealItem extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        this.props.fetchMeal(this.props.match.params.mealId)
    }

    render(){
        const {meal} = this.props;
        const display = meal ? (
            <div>
                <div>Title:{meal.title}</div>
                <div>Category:{meal.category}</div>
                <div>Ingredients:{meal.ingredients}</div>
                <div><img src={meal.photoUrl} /></div>
                <div>Cooking Instruction:{meal.cookingInstruction}</div>
            </div>
        ) : (
            <div></div>
        )

        return(
            <div>{display}</div>
        )
    }
}

export default MealItem;