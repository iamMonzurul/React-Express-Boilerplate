/**
 * Created by monzurulhaque on 9/24/17.
 */
import React, { Component } from 'react';
import {
        BrowserRouter as Router,
        Route,
        Link
    } from 'react-router-dom';

import {Helmet} from "react-helmet";

import './assets/style/app.scss';


import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';



export default class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Helmet
                    htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
                    titleTemplate="%s | React App"
                    titleAttributes={{itemprop: "name", lang: "en"}}
                    meta={[
						{name: "description", content: "The Grand Kitchen React Migration"},
						{name: "viewport", content: "width=device-width, initial-scale=1"},
					]}
                />

                <Menu />

                <Route exact path='/' component={ Home } />
                <Route path="/about" component={ About } />

            </div>
        );
    }
}