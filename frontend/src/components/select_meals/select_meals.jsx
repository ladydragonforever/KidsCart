import React from 'react';
import './select_meals.css';
import { withRouter } from "react-router";

class SelectMeals extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         word: ''
      }
      this.startSearch = this.startSearch.bind(this)
   }

   componentDidMount(){
      // debugger
      this.props.fetchSelectMeals(this.props.match.params.childId)
      // .then(() => this.props.postSelectMeals(this.props.match.params.childId))
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

   render() {
      const {meals, selectMeals} = this.props;
      return(
         <main className="selected-shell">
            <p className="select-title">Alter this weeks meal selection below.</p>
            <section className="child-select">
               <form className="selected-meals-form">
                  {/* <button className="generate-input" type="text"
                     // onClick={this.props.fetchSelectMeals(this.props.match.params.childId)}

                  >
                     Generate new meals
                  </button> */}
                  <ul className="selected-meals-list" >
                     {selectMeals.map(meal => (
                           <li key = {meal._id}>
                              <div>Title:{meal.title}</div>
                              <div>Category:{meal.category}</div>
                              {/* <div><img src={meal.photoUrl} /></div> */}
                           {/* <button 
                              className="delete-button" 
                              type="button" 
                              onClick={() => this.props.deleteSelectMeal(this.props.match.params.childId, meal._id)}>
                                 deselect meal
                           </button> */}
                           </li>
                        ))}
                  </ul>
                  <button className="generate-input" type="submit">
                     Confim meals
                  </button>
               </form>
               <aside className="search-select">
                  <label className="discover-label">
                     <input 
                        className="discover-input" 
                        type="text" 
                        placeholder="Discover more options"
                        value={this.state.word}
                        onChange = {this.update()}
                        onKeyPress={this.searchFunc()}
                     />
                     {/* <FontAwesomeIcon icon={faSearch} className={this.state.iconClassName} onClick={() => this.startSearch(this.state.word)} /> */}
                  </label>
                  <ul className="search-meals-list">
                     {meals.map(meal => (
                        <li key = {meal._id}>
                           <div>Title:{meal.title}</div>
                           <div>Category:{meal.category}</div>
                           {/* <div><img src={meal.photoUrl} /></div> */}
                           {/* <button
                              className="delete-button"
                              type="button"
                              onClick={() => this.props.addSelectMeal(this.props.match.params.childId, meal._id)}>
                                 select meal
                           </button> */}
                        </li>
                     ))}
                  </ul>
               </aside>
            </section>
         </main>
      );
   }
}

export default withRouter(SelectMeals);

// const { questions } = this.props;
        // const recentQuestions = questions.length > 20 ?
        //       questions.slice(questions.length - 20) : questions