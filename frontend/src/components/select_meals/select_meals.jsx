import React from 'react';
import './select_meals.css';

class SelectMeals extends React.Component {
   constructor(props) {
      super(props);
   }
   


   render() {

      return(
         <section className="selected-shell">
            <form className="selected-meals-form">
               <ul className="selected-meals-list" >
                  <li className="select">a</li>
                  <li className="select">a</li>
                  <li className="select">a</li>
                  <li className="select">a</li>
                  <li className="select">a</li>
               </ul>
            </form>
            <div className="search-select">
               <ul className="search-meals-list">
                  {}
               </ul>
            </div>
         </section>
      );
   }
}

export default SelectMeals;