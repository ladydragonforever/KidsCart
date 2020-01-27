import React from 'react';
import './user.css';
import Loader from "react-loader-spinner";

class UserHome extends React.Component {
    constructor(props){
        super(props)
        this.initials = this.initials.bind(this)
        this.fullName = this.fullName.bind(this)
        this.addClass = this.addClass.bind(this)
        this.deleteChild = this.deleteChild.bind(this)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    deleteChild(e,childId) {
        e.stopPropagation()
        this.props.deleteAChild(childId)
        .then(() => {
            this.props.fetchUser(this.props.userId)
        })
    }


    initials(){
        if (this.props.user) {
            return (this.props.user.firstName.slice(0, 1) + this.props.user.lastName.slice(0, 1)).toUpperCase()
        }
    }

    fullName() {
        if (this.props.user) {
            return this.props.user.firstName.slice(0, 1).toUpperCase() + this.props.user.firstName.slice(1) + " " + this.props.user.lastName.slice(0, 1).toUpperCase() + this.props.user.lastName.slice(1)
        }
    }

    addClass(e) {
        const index = e.currentTarget.dataset.index;
        const ele = this[`popout-${index}`];
        ele.style.display = ele.style.display === 'none'
            ? 'block'
            : 'none';
    }

    render() {
        if(this.props.user) {
            return (
                <div className="children-form-box">
                    <div className="children-form-inner" style={{ padding:" 75px 0px 60px"}}>
                        <div className="profile-header">
                            <div className="initial">{this.initials()}</div>
                            <div style={{marginLeft: "20px"}}>
                                <div className="user-text">{this.fullName()}</div>
                                <div className="user-text-handle">{this.props.user.handle}</div>
                                <div className="user-text-handle">{this.props.user.email}</div>
                            </div>
                            <img alt='' src={process.env.PUBLIC_URL + '/veg-heart.png'} style={{ width: "200px", marginLeft: "30px"}} />
                        </div>
                        <div className='children-container'>
                            {
                                this.props.user.childs.map((child,i) => (
                                    <div key={i}>
                                        <div className="baby-box" onClick={this.addClass} data-index={i}>
                                            <div className="initial-baby">{child.name.slice(0,1).toUpperCase()}</div>
                                            <div className="baby-text">{child.name}</div>
                                            <div className="baby-text">{child.age} year old</div>
                                            <button className="button-profile" onClick={() => this.props.history.push(`/generate-meals/${child._id}`)}>Edit the Lunch Plan</button>
                                            <button className="button-profile" onClick={(e) => this.deleteChild(e,child._id)}>Delete the Child</button>
                                        </div>
                                        <div ref={el => this[`popout-${i}`] = el} style={{display: 'none'}}>
                                                {   
                                                    child.selectedMeal ? child.selectedMeal.meals.map((each,i) => (
                                                        <div className="list-box" key={i}>
                                                            <div style={{ display: "flex", alignItems: "center", marginBottom:"20px"}}>
                                                                <b style={{marginRight:"20px"}}>{i + 1}.</b>
                                                                <img alt='' src={`${each.meal_relation.photoUrl}`} style={{ width: "100px", borderRadius: "10px", marginRight:"30px" }}></img>
                                                                <div className="user-meal-text">{each.meal_relation.title}</div>
                                                            </div>
                                                        </div>
                                                    )) 
                                                    : null
                                                }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {/* <img alt='' src={process.env.PUBLIC_URL + '/footer-veg.png'} style={{ width: "200px", marginLeft: "30px" }} /> */}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="loading-main">
                    <p>We are adding meals to your account!</p>
                    <Loader
                        className="loader"
                        type="Audio"
                        color="#f26226"
                        height={50}
                        width={50}
                        timeout={30000} //3 secs

                    /> 
                </div>
               
            )
        }
    }
}

export default UserHome