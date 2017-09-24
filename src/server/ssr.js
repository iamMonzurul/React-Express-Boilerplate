/**
 * Created by monzurulhaque on 9/24/17.
 */

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import {Helmet} from "react-helmet";


import templateFn from './template';

import App from '../client/app/App';

export default (req, res) => {
    // This context object contains the results of the render
    const context = {};

    const html = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App/>
        </StaticRouter>
    )

    const helmet = Helmet.renderStatic();

    const template = templateFn(html, helmet);

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
        res.writeHead(302, {
            Location: context.url
        });
        res.end();
    } else {
        res.send(template);
    }

//    res.send(template);

    //res.render('index', {
    //    title: "TGKs App",
    //    content: html,
    //});
};