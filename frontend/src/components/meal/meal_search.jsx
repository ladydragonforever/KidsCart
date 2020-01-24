import React from 'react';



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
                <ul>
                    {
                        meals.map(meal => (
                            <li key={meal._id}
                                onClick={() => this.routeChange(`/meals/${meal._id}`)}
                            >
                                <div>Title:{meal.title}</div>
                                <div>Category:{meal.category}</div>
                                <div><img alt='' src={meal.photoUrl}/></div>
                            </li>
                        ))
                    }
                </ul>
        )

        const display = (url === '/search/' ? (    
            <div>Please type something to search!</div>
        ) : (
            <div>{result}</div>
        ))

        return(
            <div>{display}</div>
        )
            
    }
}

export default MealSearch;