import React from 'react'
import './user.css'

class UserHome extends React.Component {
    constructor(props){
        super(props)
        this.initials = this.initials.bind(this)
        this.fullName = this.fullName.bind(this)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId)
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

    render() {
        if(this.props.user) {
            return (
                <div className="children-form-box">
                    <div className="children-form-inner">
                        <div className="profile-header">
                            <div className="initial">{this.initials()}</div>
                            <div style={{marginLeft: "20px"}}>
                                <div className="user-text">{this.fullName()}</div>
                                <div className="user-text-handle">{this.props.user.handle}</div>
                                <div className="user-text-handle">{this.props.user.email}</div>
                            </div>
                        </div>
                        <div>
                            {
                                this.props.user.childs.map((child) => (
                                    <div className="baby-box">
                                        <div className="initial-baby">{child.name.slice(0,1).toUpperCase()}</div>
                                        <div className="baby-text">{child.name}</div>
                                        <div className="baby-text">{child.age} year old</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

export default UserHome