import React from "react"
import './styles.css'


class Box extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index:0,
            translateValue: 0,
            selectType: "AMERICAN"
        }
        this.switchIndex = this.switchIndex.bind(this);
        this.onResize = this.onResize.bind(this);
        this.selectClassName = this.selectClassName.bind(this)
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize);
        this.props.changeType(this.state.selectType)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    onResize() {
        this.setState({
            translateValue: this.state.index * this.getMultiplier()
        });
    }

    getMultiplier() {
        const width = window.innerWidth;
        let multiplier;

        if (width >= 768) {
            multiplier = 583;
        } else if (width > 340) {
            multiplier = 447.5;
        } else {
            multiplier = 189.5;
        }

        return multiplier * -1;
    }

    switchIndex(e) {
        this.props.changeType(e.target.innerText)
        this.props.receiveChildCategory(e.target.innerText)
        let index;
        if (e.target.innerText === "AMERICAN") {
            index = 0;
        } else if (e.target.innerText === "CHINESE") {
            index = 1;
        } else if (e.target.innerText === "ITALIAN") {
            index = 2;
        } else if (e.target.innerText === "JAPANESE")  {
            index = 3;
        } else if (e.target.innerText === "MEXICAN")  {
            index = 4;
        }

        this.setState({
            index: index,
            selectType: e.target.innerText
        }, this.onResize);
    }

    selectClassName(name) {
        if(this.state.selectType === name) {
            return "box-title-select"
        } else {
            return "box-title"
        }
    }

    render() {
        return (
                <div className="lunchBox">
                    <div>
                        <div onClick={this.switchIndex} className={this.selectClassName("AMERICAN")}>AMERICAN</div>
                        <div onClick={this.switchIndex} className={this.selectClassName("CHINESE")}>CHINESE</div>
                        <div onClick={this.switchIndex} className={this.selectClassName("ITALIAN")}>ITALIAN</div>
                        <div onClick={this.switchIndex} className={this.selectClassName("JAPANESE")}>JAPANESE</div>
                        <div onClick={this.switchIndex} className={this.selectClassName("MEXICAN")}>MEXICAN</div>
                    </div>
                    <div className="allBox">
                        <div className="transformContainer" style={{transform:`translateY(${this.state.translateValue}px)`}}> 
                            <div className="bento-wrapper">
                                <img alt='' src={process.env.PUBLIC_URL + '/bento1.svg'} className="box" />
                                <div className="side-box">
                                     {this.props.ASideBox.map((item, i) => {
                                         return(
                                            //  <img alt='' src={process.env.PUBLIC_URL + `${item}`} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("ASideBox",i)}/>
                                             <img alt='' src={item} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("ASideBox",i)}/>
                                         )
                                     })}
                                </div>
                                <div className="entree-box">
                                    {this.props.AEntreeBox.map((item, i) => {
                                        return (
                                            // <img alt='' src={process.env.PUBLIC_URL + `${item}`} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("AEntreeBox", i)} />
                                            <img alt='' src={item} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("AEntreeBox", i)} />
                                        )
                                    })}
                                </div>
                                <div className="veggie-box">
                                    {this.props.AVegBox.map((item, i) => {
                                        return (
                                            // <img alt='' src={process.env.PUBLIC_URL + `${item}`} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("AVegBox", i)}/>
                                            <img alt='' src={item} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("AVegBox", i)}/>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="bento-wrapper">
                                <img alt='' src={process.env.PUBLIC_URL + '/bento2.svg'} className="box" />
                                <div className="side-box">
                                    {this.props.CSideBox.map((item, i) => {
                                        return (
                                            // <img alt='' src={process.env.PUBLIC_URL + `${item}`} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("CSideBox", i)}/>
                                            <img alt='' src={item} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("CSideBox", i)}/>
                                        )
                                    })}
                                </div>
                                <div className="entree-box">
                                    {this.props.CEntreeBox.map((item, i) => {
                                        return (
                                            // <img alt='' src={process.env.PUBLIC_URL + `${item}`} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("CEntreeBox", i)}/>
                                            <img alt='' src={item} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("CEntreeBox", i)}/>
                                        )
                                    })}
                                </div>
                                <div className="veggie-box">
                                     {this.props.CVegBox.map((item, i) => {
                                        return (
                                            // <img alt='' src={process.env.PUBLIC_URL + `${item}`} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("CVegBox", i)}/>
                                            <img alt='' src={item} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("CVegBox", i)}/>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="bento-wrapper">
                                <img alt='' src={process.env.PUBLIC_URL + '/bento3.svg'} className="box" />
                                <div className="side-box">
                                    {this.props.ISideBox.map((item, i) => {
                                        return (
                                            // <img alt='' src={process.env.PUBLIC_URL + `${item}`} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("ISideBox", i)}/>
                                            <img alt='' src={item} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("ISideBox", i)}/>
                                        )
                                    })}
                                </div>
                                <div className="entree-box">
                                    {this.props.IEntreeBox.map((item, i) => {
                                        return (
                                            // <img alt='' src={process.env.PUBLIC_URL + `${item}`} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("IEntreeBox", i)}/>
                                            <img alt='' src={item} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("IEntreeBox", i)}/>
                                        )
                                    })}
                                </div>
                                <div className="veggie-box">
                                    {this.props.IVegBox.map((item, i) => {
                                        return (
                                            // <img alt='' src={process.env.PUBLIC_URL + `${item}`} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("IVegBox", i)}/>
                                            <img alt='' src={item} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("IVegBox", i)}/>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="bento-wrapper">
                                <img alt='' src={process.env.PUBLIC_URL + '/bento4.svg'} className="box" />
                                <div className="side-box">
                                    {this.props.JSideBox.map((item, i) => {
                                        return (
                                            // <img alt='' src={process.env.PUBLIC_URL + `${item}`} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("JSideBox", i)}/>
                                            <img alt='' src={item} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("JSideBox", i)}/>
                                        )
                                    })}
                                </div>
                                <div className="entree-box">
                                    {this.props.JEntreeBox.map((item, i) => {
                                        return (
                                            // <img alt='' src={process.env.PUBLIC_URL + `${item}`} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("JEntreeBox", i)} />
                                            <img alt='' src={item} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("JEntreeBox", i)} />
                                        )
                                    })}
                                </div>
                                <div className="veggie-box">
                                {this.props.JVegBox.map((item, i) => {
                                    return (
                                        // <img alt='' src={process.env.PUBLIC_URL + `${item}`} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("JVegBox", i)} />
                                        <img alt='' src={item} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("JVegBox", i)} />
                                    )
                                })}
                                </div>
                            </div>
                            <div className="bento-wrapper">
                                <img alt='' src={process.env.PUBLIC_URL + '/bento5.svg'} className="box" />
                                <div className="side-box">
                                    {this.props.MSideBox.map((item, i) => {
                                        return (
                                            // <img alt='' src={process.env.PUBLIC_URL + `${item}`} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("MSideBox", i)}/>
                                            <img alt='' src={item} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("MSideBox", i)}/>
                                        )
                                    })}
                                </div>
                                <div className="entree-box">
                                    {this.props.MEntreeBox.map((item, i) => {
                                        return (
                                            // <img alt='' src={process.env.PUBLIC_URL + `${item}`} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("MEntreeBox", i)}/>
                                            <img alt='' src={item} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("MEntreeBox", i)}/>
                                        )
                                    })}
                                </div>
                                <div className="veggie-box">
                                    {this.props.MVegBox.map((item, i) => {
                                        return (
                                            // <img alt='' src={process.env.PUBLIC_URL + `${item}`} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("MVegBox", i)}/>
                                            <img alt='' src={item} className="food-img-box-item" key={i} onClick={() => this.props.deleteItem("MVegBox", i)}/>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Box