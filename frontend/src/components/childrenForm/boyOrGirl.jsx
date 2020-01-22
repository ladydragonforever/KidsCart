import React from "react"
import './childrenForm.css'

class BoyOrGirl extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            girl:"gender-box-girl",
            boy:"gender-box-boy",
            current: ""
        }
        this.changeBoyClass = this.changeBoyClass.bind(this)
        this.changeGirlClass = this.changeGirlClass.bind(this)
    }

    changeGirlClass() {
        if(this.state.current === "") {
            this.setState({
                girl: "gender-box-girl-active",
                current: "girl"
            })
        } else if (this.state.current === "boy") {
            this.setState({
                boy: "gender-box-boy",
                girl: "gender-box-girl-active",
                current: "girl"
            })
        }
        this.props.receiveChildGender("girl")
    }

    changeBoyClass() {
        if (this.state.current === "") {
            this.setState({
                boy: "gender-box-boy-active",
                current: "boy"
            })
        } else if (this.state.current === "girl") {
            this.setState({
                girl: "gender-box-girl",
                boy: "gender-box-boy-active",
                current: "boy"
            })
        }
        this.props.receiveChildGender("boy")
    }

    render() {
        return(
            <div className="children-form-box">
                <div className="children-form-inner">
                    <div className="title-form-gender">Get Started</div>
                    <div className="subtitle-form-gender">Please chose your baby's gender</div>
                    <div className="gender-container">
                        <div className={this.state.girl} onClick={this.changeGirlClass}>
                            <img src="https://i.ya-webdesign.com/images/icons-transparent-baby-6.png" style={{ width: "200px" }}/>
                        </div>
                        <div className={this.state.boy} onClick={this.changeBoyClass}>
                            <img src="https://image.flaticon.com/icons/png/512/30/30048.png" style={{ width: "200px" }} />
                        </div>
                    </div>
                    <button className="gender-button" onClick={() => this.props.history.push("/childForm")}>Next</button>
                </div>
            </div>
        )
    }
}

export default BoyOrGirl