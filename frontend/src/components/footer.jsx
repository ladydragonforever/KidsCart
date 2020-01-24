import React from "react"
import './nav/navbar.css'

class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                <img alt='' src={process.env.PUBLIC_URL + '/kidscart_logo.png'} className="logo-footer" onClick={this.backToHome} />
                <span>© Kids Cart, 2020</span>
            </div>
        )
    }
}

export  default Footer