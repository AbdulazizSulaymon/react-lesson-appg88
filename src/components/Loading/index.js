import "./Loading.css"
import React, { Component } from 'react'

export default class Loading extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");

        this.state = { step: 0, color: "red" }
    }

    componentDidMount() {
        console.log("componentDidMount");

        this.timer = setInterval(() => {
            this.state.step < 100 && this.setState((state) => {
                return { step: state.step + 1 }
            })
        }, 100);
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");

        if (this.state.step > 30 && this.state.step <= 70 && this.state.color != "yellow") {
            this.setState((state) => {
                return { color: "yellow" }
            })
        }
        else if (this.state.step > 70 && this.state.color != "green") {
            this.setState((state) => {
                return { color: "green" }
            })
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");

        clearInterval(this.timer)
    }

    render() {
        console.log("render");
        return (
            <div className="loadingPanel">
                <div className="loading" style={{ backgroundColor: this.state.color, width: `${this.state.step}%` }}>{this.state.step}%</div>
            </div>
        )
    }
}
