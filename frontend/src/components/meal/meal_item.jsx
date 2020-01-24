import React from 'react';

class MealItem extends React.Component {
    componentDidMount() {
        this.props.fetchMeal(this.props.match.params.mealId)
    }

    render(){
        const {meal} = this.props;
        const display = meal ? (
            <div>
                <div>Title
                    <div>{meal.title}</div>
                </div>
                <div>Category
                    <div>{meal.category}</div>
                </div>
                <div>Ingredients
                    {meal.ingredients.map(ingredient => (
                        <ul>
                            <li>{ingredient}</li>
                        </ul>
                    ))}
                </div>
                <div><img alt="" src={meal.photoUrl} /></div>
                <div>Cooking Instruction
                    {meal.cookingInstruction.map(instruction => (
                        <ul>
                            <li>{instruction}</li>
                        </ul>
                    ))}
                </div>
                <div>Nutrition Facts
                    <div>{meal.nutritionFacts}</div>
                </div>
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