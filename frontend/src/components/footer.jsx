import React from "react";
import './nav/navbar.css';
import { Link } from 'react-router-dom';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends React.Component {

    render() {
        return(
            <div>
                <div className="footer-linked">
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center" }}>
                        <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: "20px", fontSize: "40px", color: "#0077b5"}} />
                        <div>Software Engineer Team</div>
                    </div>
                    <div style={{ display: "flex", alignItems:"space-between", flexDirection:"column"}}>
                        <div className="linked-link"><a className="a-tage" href="https://www.linkedin.com/in/linda-liu-b700261a1/">Linda Liu's LinkedIn Profile</a><a className="a-tage" href="https://www.linkedin.com/in/lingxiaowen/">Xiaowen Ling's LinkedIn Profile</a></div>
                        <div className="linked-link"><a className="a-tage" href="https://www.linkedin.com/in/ian-franklin-dechow/">Ian Dechow's LinkedIn Profile</a><a className="a-tage"href="https://www.linkedin.com/in/dan-li-15074934/">Dan Li's LinkedIn   Profile</a></div>
                    </div>
                </div>
                <div className="footer">
                    <Link to="/"><img alt='' src={process.env.PUBLIC_URL + '/kidscart_logo.png'} className="logo-footer" /></Link>
                    <span>© Kids Cart, 2020</span>
                </div>
            </div>
        )
    }
}

export default Footer