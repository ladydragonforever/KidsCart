import React from 'react';

class MealItem extends React.Component {
    componentDidMount() {
        this.props.fetchMeal(this.props.match.params.mealId)
    }

    render(){
        const {meal} = this.props;
        const display = meal ? (
            <div className="recipe-container">
                <div className="recipe-image-wrapper">
                <img className="recipe-image-container" alt="" src={meal.photoUrl} />
                </div>
                <div className="recipe-details-panel">
                    <div className="recipe-heading-title" style={{fontSize:"30px",fontWeight:"600"}}>{meal.title}</div>
                    <div className="recipe-subheading-category">{meal.category}</div>
                    <div className="recipe-heading">Ingredients
                        {meal.ingredients.map((ingredient,idx) => (
                            <ul className="recipe-detail-ul">
                                <li className="recipe-subheading" key={idx}>{ingredient}</li>
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