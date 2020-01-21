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
                                <img src={process.env.PUBLIC_URL + '/bento1.svg'} className="box" />
                                <div className="side-box">
                                    <img src={process.env.PUBLIC_URL + '/avocado.png'} className="food-img" />
                                </div>
                                <div className="entree-box">
                                    <img src={process.env.PUBLIC_URL + '/avocado.png'} className="food-img" />
                                </div>
                                <div className="veggie-box">
                                    <img src={process.env.PUBLIC_URL + '/avocado.png'} className="food-img" />
                                </div>
                            </div>
                            <div className="bento-wrapper">
                                <img src={process.env.PUBLIC_URL + '/bento2.svg'} className="box" />
                                <div className="side-box">
                                    <img src={process.env.PUBLIC_URL + '/avocado.png'} className="food-img" />
                                </div>
                                <div className="entree-box">
                                    <img src={process.env.PUBLIC_URL + '/avocado.png'} className="food-img" />
                                </div>
                                <div className="veggie-box">
                                    <img src={process.env.PUBLIC_URL + '/avocado.png'} className="food-img" />
                                </div>
                            </div>
                            <div className="bento-wrapper">
                                <img src={process.env.PUBLIC_URL + '/bento3.svg'} className="box" />
                                <div className="side-box">
                                    <img src={process.env.PUBLIC_URL + '/avocado.png'} className="food-img" />
                                </div>
                                <div className="entree-box">
                                    <img src={process.env.PUBLIC_URL + '/avocado.png'} className="food-img" />
                                </div>
                                <div className="veggie-box">
                                    <img src={process.env.PUBLIC_URL + '/avocado.png'} className="food-img" />
                                </div>
                            </div>
                            <div className="bento-wrapper">
                                <img src={process.env.PUBLIC_URL + '/bento4.svg'} className="box" />
                                <div className="side-box">
                                    <img src={process.env.PUBLIC_URL + '/avocado.png'} className="food-img" />
                                </div>
                                <div className="entree-box">
                                    <img src={process.env.PUBLIC_URL + '/avocado.png'} className="food-img" />
                                </div>
                                <div className="veggie-box">
                                    <img src={process.env.PUBLIC_URL + '/avocado.png'} className="food-img" />
                                </div>
                            </div>
                            <div className="bento-wrapper">
                                <img src={process.env.PUBLIC_URL + '/bento5.svg'} className="box" />
                                <div className="side-box">
                                    <img src={process.env.PUBLIC_URL + '/avocado.png'} className="food-img" />
                                </div>
                                <div className="entree-box">
                                    <img src={process.env.PUBLIC_URL + '/avocado.png'} className="food-img" />
                                </div>
                                <div className="veggie-box">
                                    <img src={process.env.PUBLIC_URL + '/avocado.png'} className="food-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Box