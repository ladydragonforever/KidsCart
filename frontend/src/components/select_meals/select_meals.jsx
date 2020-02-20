import React from 'react';
import './select_meals.css';
import { withRouter } from "react-router";
// import { Link } from 'react-router-dom';

class SelectMeals extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         word: '',
         // meals: {}
      }
      this.startSearch = this.startSearch.bind(this);
      this.saveMealstoDB = this.saveMealstoDB.bind(this);
   }

   componentDidMount(){
      this.props.clearMeals();
      this.props.fetchSelectMeals(this.props.match.params.childId)
   
   }


   update() {
      return e => this.setState({ word: e.target.value })
   }

   startSearch(keyword) {
      this.props.fetchSearchMeals(keyword);
   }
   searchFunc() {
      return e => {
         if (e.key === 'Enter') {
            this.startSearch(this.state.word)
         }
      }
   }

   saveMealstoDB() {
      this.props.createSelectMeals(this.props.match.params.childId, this.props.selectMeals)
      .then(this.props.history.push('/user'))
   }

   render() {
      const {meals, selectMeals} = this.props;

      const searchResults = Object.values(meals).length !== 0 
      ? <ul className="search-meals-list">
         {meals.map(meal => (
            <li
               key={meal._id}
               className="search-list-element">
               <div className="search-food-image"><img alt='' src={meal.photoUrl} /></div>
               <div className="seach-food-info">
                  <div>{meal.title}</div>
                  <button
                     className="select-button"
                     type="button"
                     onClick={() => this.props.addSelectMeal(this.props.match.params.childId, meal._id, meal.title,
                        meal.category, meal.photoUrl, meal.ingredients, meal.cookingInstruction, meal.nutritionFacts)}>
                     select meal
                              </button>
               </div>
            </li>
         ))}
      </ul>
      : null


      // const fiveSelectMeals = selectMeals.length > 5 ? selectMeals.slice(selectMeals.length - 5) : selectMeals;
      return(
         <main className="selected-shell">
            <p className="select-title">Plan your meals here:</p>
            <section className="child-select">
               <form className="selected-meals-form">
                  {/* <button className="generate-input" type="text"
                     // onClick={this.props.fetchSelectMeals(this.props.match.params.childId)}>
                     Generate new meals
                  </button> */}
                  <p className="select-meal-text-5">Deselect a meal first if you want to add a new one.<br/>5 meals per week!</p>
                  <ul className="selected-meals-list" >
                     {selectMeals.map(meal => (
                           <li 
                              key = {meal._id}
                              className="list-element"
                              tabIndex="1">
                              <div className="food-image"><img alt='' src={meal.photoUrl} /></div>
                              <div className="meal-info">
                                 <span className="meal-name" >{meal.title}</span>
                                 <button
                                    className="delete-button"
                                    type="button"
                                    onClick={() => this.props.removeSelectMeal(this.props.match.params.childId, meal._id)}>
                                    deselect meal
                                 </button>
                              </div>
                              <div className="dropdown-meal-content">
                                 <div id="header-info">{meal.category}: {meal.title}</div>
                                 <div>Ingredients:
                                    {meal.ingredients.map((ingredient, i) => (
                                          <ul key={i}>
                                             <li>{ingredient}</li>
                                          </ul>
                                       ))}
                                 </div>
                                   
                                 <div>Cooking Instruction:
                                       {meal.cookingInstruction.map((instruction, i) => (
                                          <ul key={i}>
                                             <li>{instruction}</li>
                                          </ul>
                                       ))}
                                 </div>
                                    
                                 <div>Nutrition Facts:
                                    <div>{meal.nutritionFacts}</div>
                                 </div>
                              </div>
                           </li>
                        ))}
                  </ul>
               </form>
               <aside className="search-select">
                  <label className="discover-label">
                     <input 
                        className="discover-input" 
                        type="text" 
                        placeholder="Discover more by typing (Japanese, Chinese...)"
                        value={this.state.word}
                        onChange = {this.update()}
                        onKeyPress={this.searchFunc()}
                     />
                     {/* <FontAwesomeIcon icon={faSearch} className={this.state.iconClassName} onClick={() => this.startSearch(this.state.word)} /> */}
                  </label>
                  {searchResults}
               </aside>
            </section>
            <button className="generate-input" type="submit" onClick={this.saveMealstoDB}>
               Confim meals
            </button>
         </main>
      );
   }
}

export default withRouter(SelectMeals);

// const { questions } = this.props;
        // const recentQuestions = questions.length > 20 ?
        //       questions.slice(questions.length - 20) : questions
