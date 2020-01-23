import React from 'react';
import { withRouter } from 'react-router-dom';
import Draggable from 'react-draggable';
import './session.css'

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            handle: '',
            password: '',
            password2: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

   

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    };

    componentWillUnmount() {
        this.props.clearErrors();
    }



    handleSubmit(e) {
        e.preventDefault();
        if (this.state.length === 0) return null;
        let user = {
            email: this.state.email,
            handle: this.state.handle,
            password: this.state.password,
            password2: this.state.password2
        };
        console.log(this.props.signedIn);
        this.props.signup(user).then(()=> this.props.signedIn ? this.props.closeModal() : "");
        
    }

    

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.props.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.props.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
           <Draggable handle="h1">
              <div className="session-form">
                 <h1>Sign up</h1>
                 <button className="close-form" type="button" onClick={this.props.closeModal}>×</button>
                 <form onSubmit={this.handleSubmit} className="signup-form">
                    <div className="session-errors">{this.renderErrors()}</div>
                    <div className="session-inputs">
                        {/* <br /> */}
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                            className="login-input"
                        />
                        {/* <br /> */}
                        <input type="text"
                            value={this.state.handle}
                            onChange={this.update('handle')}
                            placeholder="Handle"
                            className="login-input"
                        />
                        {/* <br /> */}
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            className="login-input"
                        />
                        {/* <br /> */}
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                            className="login-input"
                        />
                        {/* <br /> */}
                       <input type="submit" value="Submit" className="session-submit"/>
                       
                       <p className="session-footer">Already have an account? &nbsp;
                       <button
                             className="session-footer-button"
                             type="button"
                             onClick={() => this.props.openModal('LOGIN')}>Login
                       </button>.
                       </p>
                       <p className="session-footer">
                          Can't commit? Explore our site with a &nbsp;
                       <button
                             className="session-footer-button"
                             type="button"
                          //   onClick={(e) => this.demo(e)}
                          >
                             demo login
                       </button>
                  </p>
                    </div>
                </form>
            </div>
           </Draggable>
        );
    }
}

export default withRouter(SignupForm);