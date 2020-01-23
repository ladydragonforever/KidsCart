import React from 'react';
import './select_meals.css';

class SelectMeals extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      // const selectMeals = this.props.
   }
   

   render() {

      const selectedMeals = null;

      const searchMeals = null;

      return(
         <section className="selected-shell">
            <form className="selected-meals-form">
               <ul className="selected-meals-list" >
                  { selectedMeals }
               </ul>
            </form>
            <div className="search-select">
               <ul className="search-meals-list">
                  { searchMeals }
               </ul>
            </div>
         </section>
      );
   }
}

export default SelectMeals;