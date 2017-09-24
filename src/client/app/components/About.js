/**
 * Created by monzurulhaque on 9/25/17.
 */
import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

export default class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Helmet
                    title="Know More About Us"
                    />
                <div className="row">
                    <div className="col-md-12">
                        <div className="jumbotron">
                            <h2>About Us</h2>
                            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <p><a className="btn btn-danger btn-lg" href="#" role="button">Read more</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
