/**
 * Created by monzurulhaque on 9/24/17.
 */
import React, { Component } from 'react';
import {
    Route,
    Link
} from 'react-router-dom';

export default class Menu extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav navbar navbar-default>
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}