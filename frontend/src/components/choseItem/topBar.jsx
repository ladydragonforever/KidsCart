import React from "react"
import { runInThisContext } from "vm"

class TopBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: "Side",
            ASideBox: [],
            CSideBox: [],
            ISideBox: [],
            JSideBox: [],
            MSideBox: [],
            AEntreeBox: [],
            CEntreeBox: [],
            IEntreeBox: [],
            JEntreeBox: [],
            MEntreeBox: [],
        }
        this.switchTopBar = this.switchTopBar.bind(this)
        this.selectClassName = this.selectClassName.bind(this)
        this.addToSideBox = this.addToSideBox.bind(this)
        this.addToEntreeBox = this.addToEntreeBox.bind(this)
        this.addToVegBox = this.addToVegBox.bind(this)
    }

    

    switchTopBar(e) {
        this.setState({
            current:e.target.innerText
        })
    }

    selectClassName(className) {
        if(className === this.state.current) {
            return "bar-text-select"
        } else {
            return "bar-text"
        }
    }

    addToVegBox(e) {
        let src = e.target.src.slice(21)
        if (this.props.typeFood === "AMERICAN") {
            this.setState({
                AEntreeBox: this.state.AEntreeBox.concat(src)
            })
        } else if (this.props.typeFood === "CHINESE") {
            this.setState({
                CEntreeBox: this.state.CEntreeBox.concat(src)
            })
        } else if (this.props.typeFood === "ITALIAN") {
            this.setState({
                IEntreeBox: this.state.IEntreeBox.concat(src)
            })
        } else if (this.props.typeFood === "JAPANESE") {
            this.setState({
                JEntreeBox: this.state.JEntreeBox.concat(src)
            })
        } else if (this.props.typeFood === "MEXICAN") {
            this.setState({
                MEntreeBox: this.state.MEntreeBox.concat(src)
            })
        }
    }

    addToEntreeBox(e) {
        let src = e.target.src.slice(21)
        if (this.props.typeFood === "AMERICAN") {
            this.setState({
                AEntreeBox: this.state.AEntreeBox.concat(src)
            })
        } else if (this.props.typeFood === "CHINESE") {
            this.setState({
                CEntreeBox: this.state.CEntreeBox.concat(src)
            })
        } else if (this.props.typeFood === "ITALIAN") {
            this.setState({
                IEntreeBox: this.state.IEntreeBox.concat(src)
            })
        } else if (this.props.typeFood === "JAPANESE") {
            this.setState({
                JEntreeBox: this.state.JEntreeBox.concat(src)
            })
        } else if (this.props.typeFood === "MEXICAN") {
            this.setState({
                MEntreeBox: this.state.MEntreeBox.concat(src)
            })
        } 
    }

    addToSideBox(e) {
        let src = e.target.src.slice(21)
        if (this.props.typeFood === "AMERICAN")  {
            this.setState({
                ASideBox: this.state.ASideBox.concat(src)
            })
        } else if (this.props.typeFood === "CHINESE") {
            this.setState({
                CSideBox: this.state.CSideBox.concat(src)
            })
        } else if (this.props.typeFood === "ITALIAN") {
            this.setState({
                ISideBox: this.state.ISideBox.concat(src)
            })
        } else if (this.props.typeFood === "JAPANESE") {
            this.setState({
                JSideBox: this.state.JSideBox.concat(src)
            })
        } else if (this.props.typeFood === "MEXICAN") {
            this.setState({
                MSideBox: this.state.MSideBox.concat(src)
            })
        }
    }

    showDropDown() {
        if(this.state.current === "Side") {
            return (
                <div>
                    <div className="drop-down-box-item">
                        <div className="food-dropdown-item" onClick={this.addToSideBox}>
                            <img src={process.env.PUBLIC_URL + '/rice.png'} className="food-img" />
                            <p>Rice</p>
                        </div>
                        <div className="food-dropdown-item" onClick={this.addToSideBox}>
                            <img src={process.env.PUBLIC_URL + '/noodles.png'} className="food-img" />
                            <p>Noodles</p>
                        </div>
                        <div className="food-dropdown-item" onClick={this.addToSideBox}>
                            <img src={process.env.PUBLIC_URL + '/bread.png'} className="food-img" />
                            <p>Bread</p>
                        </div>
                        <div className="food-dropdown-item" onClick={this.addToSideBox}>
                            <img src={process.env.PUBLIC_URL + '/French_fries.png'} className="food-img" />
                            <p>Fries</p>
                        </div>
                    </div>
                    <div className="drop-down-box-item">
                        <div className="food-dropdown-item" onClick={this.addToSideBox}>
                            <img src={process.env.PUBLIC_URL + '/egg.png'} className="food-img" />
                            <p>Egg</p>
                        </div>
                        <div className="food-dropdown-item" onClick={this.addToSideBox}>
                            <img src={process.env.PUBLIC_URL + '/potatoes.png'} className="food-img" />
                            <p>Potatoes</p>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.current === "Entree") {
            return (
                <div className="drop-down-box-item">
                    <div className="food-dropdown-item" onClick={this.addToEntreeBox}>
                        <img src={process.env.PUBLIC_URL + '/beef.png'} className="food-img" />
                        <p>Beef</p>
                    </div>
                    <div className="food-dropdown-item" onClick={this.addToEntreeBox}>
                        <img src={process.env.PUBLIC_URL + '/chicken.png'} className="food-img" />
                        <p>Chicken</p>
                    </div>
                    <div className="food-dropdown-item" onClick={this.addToEntreeBox}>
                        <img src={process.env.PUBLIC_URL + '/pork.png'} className="food-img" />
                        <p>Pork</p>
                    </div>
                    <div className="food-dropdown-item" onClick={this.addToEntreeBox}>
                        <img src={process.env.PUBLIC_URL + '/shrimp.png'} className="food-img" />
                        <p>Shrimp</p>
                    </div>
                </div>
            )
        } else if (this.state.current === "Vegetable") {
            return (
                <div>
                    <div className="drop-down-box-item">
                        <div className="food-dropdown-item">
                            <img src={process.env.PUBLIC_URL + '/broccoli.png'} className="food-img" />
                            <p>Broccoli</p>
                        </div>
                        <div className="food-dropdown-item">
                            <img src={process.env.PUBLIC_URL + '/carrot.png'} className="food-img" />
                            <p>Carrot</p>
                        </div>
                        <div className="food-dropdown-item">
                            <img src={process.env.PUBLIC_URL + '/green_beans.png'} className="food-img" />
                            <p>Green Bean</p>
                        </div>
                        <div className="food-dropdown-item">
                            <img src={process.env.PUBLIC_URL + '/corn.png'} className="food-img" />
                            <p>Corn </p>
                        </div>
                    </div>
                    <div className="drop-down-box-item">
                        <div className="food-dropdown-item">
                            <img src={process.env.PUBLIC_URL + '/avocado.png'} className="food-img" />
                            <p>Avocado</p>
                        </div>
                        <div className="food-dropdown-item">
                            <img src={process.env.PUBLIC_URL + '/tomato.png'} className="food-img" />
                            <p>Tomato</p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="top-container">
                <div className="top-title">
                    <div onClick={this.switchTopBar} className={this.selectClassName("Side")}>Side</div>
                    <div onClick={this.switchTopBar} className={this.selectClassName("Entree")}>Entree</div>
                    <div onClick={this.switchTopBar} className={this.selectClassName("Vegetable")}>Vegetable</div>
                </div>
                <div className="drop-down-box">{this.showDropDown()}</div>
            </div>
        )
    }
}

export default TopBar

