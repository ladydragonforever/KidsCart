import React from "react"
import './styles.css'

class Box extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index:0,
            translateValue: 0
        }
        this.switchIndex = this.switchIndex.bind(this);
        this.onResize = this.onResize.bind(this);
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
        if (e.target.innerText === "American") {
            index = 0;
        } else if (e.target.innerText === "Chinese") {
            index = 1;
        } else if (e.target.innerText === "Italian") {
            index = 2;
        } else if (e.target.innerText === "Japanese")  {
            index = 3;
        } else if (e.target.innerText === "Mexican")  {
            index = 4;
        }

        this.setState({
            index: index
        }, this.onResize);
    }

    render() {
        return (
                <div className="lunchBox">
                    <div>
                        <div onClick={this.switchIndex}>American</div>
                        <div onClick={this.switchIndex}>Chinese</div>
                        <div onClick={this.switchIndex}>Italian</div>
                        <div onClick={this.switchIndex}>Japanese</div>
                        <div onClick={this.switchIndex}>Mexican</div>
                    </div>
                    <div className="allBox">
                        <div className="transformContainer" style={{transform:`translateY(${this.state.translateValue}px)`}}> 
                            <img src={process.env.PUBLIC_URL + '/bento1.svg'} className="box" />
                            <img src={process.env.PUBLIC_URL + '/bento2.svg'} className="box" />
                            <img src={process.env.PUBLIC_URL + '/bento3.svg'} className="box" />
                            <img src={process.env.PUBLIC_URL + '/bento4.svg'} className="box" />
                            <img src={process.env.PUBLIC_URL + '/bento5.svg'} className="box" />
                        </div>
                    </div>
                </div>
        )
    }
}

export default Box