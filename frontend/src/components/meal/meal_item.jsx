import React from 'react';

class MealItem extends React.Component {
    componentDidMount() {
        this.props.fetchMeal(this.props.match.params.mealId)
    }

    render(){
        const {meal} = this.props;
        const display = meal ? (
            <div className="recipe-container">
                <img className="recipe-image-container" alt="" src={meal.photoUrl} />
                <div className="recipe-details-panel">
                    <div className="recipe-heading">Title
                        <div className="recipe-subheading">{meal.title}</div>
                    </div>
                    <div className="recipe-heading">Category
                        <div className="recipe-subheading">{meal.category}</div>
                    </div>
                    <div className="recipe-heading">Ingredients
                        {meal.ingredients.map(ingredient => (
                            <ul className="recipe-detail-ul">
                                <li className="recipe-subheading">{ingredient}</li>
                            </ul>
                        ))}
                    </div>
                    <div className="recipe-heading">Cooking Instruction
                        {meal.cookingInstruction.map(instruction => (
                            <ul className="recipe-detail-ul">
                                <li className="recipe-subheading">{instruction}</li>
                            </ul>
                        ))}
                    </div>
                    <div className="recipe-heading">Nutrition Facts
                        <div className="recipe-subheading">{meal.nutritionFacts}</div>
                    </div>
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