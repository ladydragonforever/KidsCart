import React from "react"
import './nav/navbar.css'

class Footer extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="footer">
                <img src={process.env.PUBLIC_URL + '/kidscart_logo.png'} className="logo-footer" onClick={this.backToHome} />
                <span>© Kids Cart, 2020</span>
            </div>
        )
    }
}

export  default Footer