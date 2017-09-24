/**
 * Created by monzurulhaque on 9/24/17.
 */
const express   = require('express');
const path      = require('path');
const Helmet    = require('react-helmet');

import SSR from './ssr';

const app = express();

app.use(express.static('public'));


app.use('/*', SSR);

app.listen(5000, function(req, res) {
    console.log('Server running on port 5000.');
});