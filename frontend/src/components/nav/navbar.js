import React from 'react';
import { NavLink } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
        this.backToHome = this.backToHome.bind(this)
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
                    {/* <NavLink to={'/tweets'}>All Tweets</NavLink> */}
                    {/* <NavLink to={'/profile'}>Profile</NavLink> */}
                    {/* <NavLink to={'/new_tweet'}>Write a Tweet</NavLink> */}
                    <button onClick={this.logoutUser}>Logout</button>
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

    render() {
        return (
            <div className="nav-bar-container">
                <img src={process.env.PUBLIC_URL + '/kidscart_logo.png'} className="logo" onClick={this.backToHome}/>
                {/* <div>
                    <input type="text" />
                </div> */}
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;