import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { withRouter } from 'react-router';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        const res = this.props.location.pathname.match("/search/(.*)")
        if (res) {
            const query = res[1]
            this.state = {
                word: query
            }
            this.startSearch(query)
        } else {
            this.state = {
                word: ''
            }
        }
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
        this.backToHome = this.backToHome.bind(this)
        this.startSearch = this.startSearch.bind(this)
    }

    componentDidUpdate(prevProps) {
        const res = this.props.location.pathname.match("/search/(.*)")
        if (this.props.location.pathname !== prevProps.location.pathname && !res) {
            this.setState({ word: '' });
        }
    }

    update() {
        return e => this.setState({ word: e.target.value })
    }

    startSearch(query) {
        this.props.fetchSearchMeals(query);
        return this.props.history.push(`/search/${query}`)
    }
    searchFunc() {
        return e => {
            if (e.key === 'Enter') {
                this.startSearch(e.target.value)
            }
        }
    }

    backToHome(){
        this.props.history.push("/")
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    {/* <NavLink to={'/meals'}>All Meals</NavLink> */}
                    {/* <NavLink to={'/profile'}>Profile</NavLink> */}
                    {/* <NavLink to={'/new_meal'}>Create a Meal</NavLink> */}
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div>
                    <NavLink to={'/signup'} className="loginButton">SIGN UP</NavLink>
                    <NavLink to={'/login'} className="loginButton">LOG IN</NavLink>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="nav-bar-container">
                <img src={process.env.PUBLIC_URL + '/kidscart_logo.png'} className="logo" onClick={this.backToHome}/>
                <div>
                    <input 
                        type="text"
                        placeholder="Search..."
                        value={this.state.word}
                        onChange={this.update()}
                        onKeyPress={this.searchFunc()} 
                    />
                </div>
                {this.getLinks()}
            </div>
        );
    }
}

export default withRouter(NavBar);