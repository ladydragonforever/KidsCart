import React from "react"
import { Link } from 'react-router-dom';

class Footer extends React.Component {

    render() {
        return(
            <div className="footer">
               <Link to="/"><img alt='' src={process.env.PUBLIC_URL + '/kidscart_logo.png'} className="logo-footer" /></Link>
               <span>© Kids Cart, 2020</span>
            </div>
        )
    }
}

export  default Footer