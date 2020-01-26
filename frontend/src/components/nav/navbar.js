import React from 'react';
// import { NavLink } from 'react-router-dom';
import './navbar.css';
import { withRouter } from 'react-router';
import { faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        const res = this.props.location.pathname.match("/search/(.*)")
        if (res) {
            const query = res[1]
            this.state = {
                word: query,
                iconClassName: "search-icon"
            }
            this.startSearch(query)
        } else {
            this.state = {
                word: '',
                iconClassName: "search-icon"
            }
        }
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
        this.backToHome = this.backToHome.bind(this)
        this.startSearch = this.startSearch.bind(this)
        this.inputFocus = this.inputFocus.bind(this)
        this.inputUnFocus = this.inputUnFocus.bind(this)
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
                <div className="user-profile-icon">
                    {/* <NavLink to={'/meals'}>All Meals</NavLink> */}
                    {/* <NavLink to={'/profile'}>Profile</NavLink> */}
                    {/* <NavLink to={'/new_meal'}>Create a Meal</NavLink> */}
                    {/* <div style={{ display:"flex"}}> */}
                    <FontAwesomeIcon icon={faUser} style={{ fontSize: "30px", color: "grey", cursor: "pointer" }} onClick={() => this.props.history.push("/user")} />
                    <button className="loginButton" onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div>
                  <button className="loginButton" onClick={() => this.props.openModal('SIGNUP')}>Sign up</button>
                  <button className="loginButton" onClick={() => this.props.openModal('LOGIN')}>Log in</button>
                </div>
            );
        }
    }

    inputFocus() {
        this.setState({
            iconClassName: "search-icon-open"
        })
    }

    inputUnFocus() {
        this.setState({
            iconClassName: "search-icon"
        })
    }

    render() {
        return (
            <div className="nav-bar-container">
                <img alt='' src={process.env.PUBLIC_URL + '/kidscart_logo.png'} className="logo" onClick={this.backToHome}/>
                <div style={{ flex: "0.7"}}>
                    <label className="search-label">
                        <input className="search-input" type="text" placeholder="Search for anything" 
                            onFocus={this.inputFocus} 
                            onBlur={this.inputUnFocus} 
                            onKeyUp={this.getSearchInput}   
                            value={this.state.word}
                            onChange={this.update()}
                            onKeyPress={this.searchFunc()}
                         />
                        <FontAwesomeIcon icon={faSearch} className={this.state.iconClassName} onClick={() => this.startSearch(this.state.word)} />
                    </label>
                </div>
                {this.getLinks()}
            </div>
        );
    }
}

export default withRouter(NavBar);