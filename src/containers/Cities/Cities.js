import React from 'react'
import "./Cities.css"
import Card from '../../components/Card/Card';

class Cities extends React.Component {
    constructor(props) {
        super(props);

        this.state = props
    }

    render() {
        return (
            <section className="bg-primary">
                <div className="container py-5">
                    <h1 className="text-center text-warning mb-4">Cities</h1>
                    <div className="row">
                        {
                            this.state.data.map((city, i) =>
                                <div className="col-sm-6 col-md-4 mb-3" key={city.title}>
                                    <Card img={city.img}
                                        title={city.title}
                                        text={city.text} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Cities;