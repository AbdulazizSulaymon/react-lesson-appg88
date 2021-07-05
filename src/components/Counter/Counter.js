import React from 'react'
import "./Counter.css"

class Counter extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = props;
    }

    // state = { value: 2, type: "btn-success" };

    counterClick = () => {
        this.setState((state) => {
            console.log(state);

            return { value: state.value + 1 }
        })
    }

    render() {
        return <div className="container py-3 counter">
            <button className={`btn ${this.state.type}`} onClick={this.counterClick}>
                {this.state.value}
            </button>
        </div>
    }
}

export default Counter;