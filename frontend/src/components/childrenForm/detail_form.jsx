import React from "react"

class DetailForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            age: ""
        }
        this.getInputValue = this.getInputValue.bind(this)
        this.nextToLunchBox  = this.nextToLunchBox.bind(this)
    }


    getInputValue(flied) {
        return e => {
            this.setState({
                [flied]: e.target.value
            })
        }
    }

    nextToLunchBox() {
        this.props.receiveChildName(this.state.name)
        this.props.receiveChildAge(this.state.age)
        this.props.history.push('/lunchBoxSelect')
    }

    render() {
        return(
            <div className="children-form-box">
                <div className="children-form-inner" style={{paddingBottom:"90px"}}>
                    <div className="title-form-gender">Children Profile</div>
                    <div className="subtitle-form-gender">Please fill out your child's information</div>
                    <div className="child-form-container">
                            <img src={process.env.PUBLIC_URL + "girl-form.png"} style={{ width: "130px"}} /> 
                            <div>
                                <div>
                                    <div className="input-title">Children Name</div>
                                    <input type="text" className="input-child" onChange={this.getInputValue("name")} />
                                </div>
                                <div>
                                    <div className="input-title">Children Age</div>
                                <input type="text" className="input-child" onChange={this.getInputValue("age")}/>
                                </div>
                            </div>
                            <img src={process.env.PUBLIC_URL + "boy-form.png"} style={{ width: "180px" }} /> 
                    </div>
                    <button className="gender-button" onClick={this.nextToLunchBox}>Next</button>
                </div>
            </div>
        )
    }
}

export default DetailForm