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
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
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
        // console.log(this.props.signedIn);
        this.props.signup(user).then(()=> this.props.signedIn ? this.props.closeModal() : "");
        
    }
    handleDemoSubmit(e) {
        e.preventDefault();
        const user = {
            email: "demoUser@demo.com",
            password: "123456"
        }
        this.props.openModal('LOGIN')
        setTimeout(()=> {
            document.getElementsByClassName("session-footer-button")[1].click();
        }, 1000);

    }
    demo(user) {
        const intervalSpeed = 75;

        const { email, password } = user;
        const { login } = this.props;
        const demoEmailTime = email.length * intervalSpeed;
        const demoPasswordTime = password.length * intervalSpeed;
        const buffer = intervalSpeed * 2;
        const totalDemoTime = demoEmailTime + demoPasswordTime + buffer;

        this.demoEmail(email, intervalSpeed);

        setTimeout(() => this.demoPassword(password, intervalSpeed), demoEmailTime);


        setTimeout(() => {
            login(user).then(() =>
                this.props.closeModal()
            )
        }, totalDemoTime)



    }

    demoEmail(email, intervalSpeed) {
        let i = 0;

        setInterval(() => {
            if (i <= email.length) {
                this.setState({ email: email.slice(0, i) })
                i++
            } else {
                clearInterval()
            }
        }, intervalSpeed);
    }

    demoPassword(password, intervalSpeed) {
        let j = 0;

        setInterval(() => {
            if (j <= password.length) {
                this.setState({ password: password.slice(0, j) })
                j++
            } else {
                clearInterval();
            }
        }, intervalSpeed);
    }
    

    renderErrors(field) {
        const err = Object.keys(this.props.errors).filter((error) => (
            error === field
        )) 
        return (
            <ul>
                {
                    this.props.errors[err]
                }
               
            </ul>
        );
    }

    render() {
        return (
           <Draggable handle="h1">
              <div className="session-form">
                 <h1>Sign Up</h1>
                 <button className="close-form" type="button" onClick={this.props.closeModal}>×</button>
                 <form onSubmit={this.handleSubmit} className="signup-form">
                    {/* <div className="session-errors">{this.renderErrors()}</div> */}
                    <div className="session-inputs">
                        {/* <br /> */}
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                            className="login-input"
                        />
                        <div className="session-errors">{this.renderErrors("email")}</div>

                        {/* <br /> */}
                        <input type="text"
                            value={this.state.handle}
                            onChange={this.update('handle')}
                            placeholder="Handle"
                            className="login-input"
                            id="handle"
                        />
                        {/* <br /> */}
                        <div className="session-errors">{this.renderErrors("handle")}</div>
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            className="login-input"
                            id="password"
                        />
                        <div className="session-errors">{this.renderErrors("password")}</div>
                        {/* <br /> */}
                        <input type="password"
                                value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                            className="login-input"
                            id="password2"
                        />
                        <div className="session-errors">{this.renderErrors("password2")}</div>
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
                             onClick={this.handleDemoSubmit}
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