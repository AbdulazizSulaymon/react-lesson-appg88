import "./Clock.css"
import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");

        this.state = { time: new Date() }
    }

    componentDidMount() {
        console.log("componentDidMount");

        this.timer = setInterval(() => {
            this.setState((state) => {
                console.log(state.time.getSeconds());

                return { time: new Date() }
            })
        }, 1000);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.timer)
    }

    getTime = (type) => {
        let n;
        switch (type) {
            case "h": n = this.state.time.getHours(); break;
            case "m": n = this.state.time.getMinutes(); break;
            case "s": n = this.state.time.getSeconds(); break;
        }

        n = (n < 10 ? "0" : "") + n;

        return n;
    }

    render() {
        console.log("render");
        return (
            <div className="clockTable">
                <h1>{this.getTime('h')}:{this.getTime('m')}:{this.getTime('s')}</h1>
            </div>
        )
    }
}
