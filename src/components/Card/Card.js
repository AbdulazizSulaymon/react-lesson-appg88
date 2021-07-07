import React from 'react'
import "./Card.css"

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = props
    }

    render() {
        return <div className="shadow rounded overflow-hidden pb-3 bg-warning">
            <img src={this.state.img} className="w-100 mb-3" alt="" />
            <p className="fw-bold fs-3  m-2 text-center">{this.state.title}</p>
            <p className=" mx-3 text-center">
                {this.state.text}
            </p>
        </div>
    }
}

export default Card;