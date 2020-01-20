import React from 'react';
import { NavLink } from 'react-router-dom'
// import './navbar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    {/* <NavLink to={'/tweets'}>All Tweets</NavLink> */}
                    {/* <NavLink to={'/profile'}>Profile</NavLink> */}
                    {/* <NavLink to={'/new_tweet'}>Write a Tweet</NavLink> */}
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div>
                    <NavLink to={'/signup'}>Signup</NavLink>
                    <NavLink to={'/login'}>Login</NavLink>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h1>Welcome to our KidsCart App!</h1>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;