import React from 'react';
import './search.css'



class MealSearch extends React.Component {
    constructor() {
        super();
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange(path) {
        this.props.history.push(path)
    }

    render(){
        const { meals, query, url } = this.props;
        const result = meals.length === 0 ? (
            <div>
                <div>
                    Sorry, we couldn't find any meal for <span>{query}</span>!
                </div>
                <div>
                    Please try a different type.
                </div>
            </div>
        ) : (
                <div className="grid-container">
                    {
                        meals.map(meal => (
                            <div key={meal._id} className="grid-item"
                                onClick={() => this.routeChange(`/meals/${meal._id}`)}
                            >   
                                <img alt='' src={meal.photoUrl} className="search-img" />
                                <div className="search-text-box">
                                    <div className="search-meal-title">{meal.title}</div>
                                    <div className="search-meal-subtitle">{meal.category}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
        )

        const display = (url === '/search/' ? (    
            <div>Please type something to search!</div>
        ) : (
             <div className="search-index-box">{result}</div>
        ))

        return(
            <div className="search-container">{display}</div>
        )
            
    }
}

export default MealSearch;