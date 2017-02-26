// Require http and express application
var http = require('http');
var express = require('express');
var app = express();
var path = require('path');

// Use app.use to match HTTP requests

    // if else checks that /gets only accepts GET request
    app.use('/gets', function(request, response) {
        if(request.method == 'GET') {
            // checks to see if query parameter is empty or not
            // by checking the request query's length
            if(Object.keys(request.query).length !== 0) {
                // req.query GET query parameters sent in
                response.send(request.query);
            }
            // if query parameter is empty, state that GET was accepted but there were no query parameters
            else {
                response.send('GET request accepted; No query parameters sent in');
            }
        }
        else {
            response.send('Request rejected! Request does not support HTTP method');
        }
    });

// Everything below is similar to the above for GET, except it is for POST, PUT, and DELETE
    // if else checks that /posts only accepts POST request
    app.use('/posts', function(request,response) {
        if(request.method == 'POST') {
            if(Object.keys(request.query).length !== 0) {
                response.send(request.query);
            }
            else {
                response.send('POST request accepted; No query parameters sent in');
            }
        }
        else {
            response.send('Request rejected! Request does not support HTTP method');
        }
    });

    // if else checks that /puts only accepts PUT request
    app.use('/puts', function(request,response) {
        if(request.method == 'PUT') {
            if(Object.keys(request.query).length !== 0) {
                response.send(request.query);
            }
            else {
                response.send('PUT request accepted; No query parameters sent in');
            }
        }
        else {
            response.send('Request rejected! Request does not support HTTP method');
        }
    });

    // if else checks that /deletes only accepts DELETE request
    app.use('/deletes', function(request,response) {
        if(request.method == 'DELETE') {
            if(Object.keys(request.query).length !== 0) {
                response.send(request.query);
            }
            else {
                response.send('DELETE request accepted; No query parameters sent in');
            }
        }
        else {
            response.send('Request rejected! Request does not support HTTP method');
        }
    });

// Can go to port localhost:3333 but app.js server is also hosted on apigee
app.listen(3333);
console.log('Go to http://localhost:3333');
