// Webservice to illustrate serving static content and simple routes.
//
// Author: S. Sigman
// Date: 11/07/2023

const express = require("express")

// Declare the port
const PORT = 3000

// Make the server app
const app = express();

// Establish a route to static content
app.use(express.static("public"))

// Establish a function to log requests to the server
const logRequest = function(req, res, next) {
    console.log(`Request: ${req.method} for ${req.path}`)
    next() // allow the next middleware component to run
 }

// register the function to be used
app.use(logRequest)

// define a route to say hello
// This route is executed as: localhost:3000/hello
app.get("/hello", (req, res) => {
    res.send("<h1>Hello world!</h1>")
})

// create a listener on the specified port
app.listen(PORT,(err) => {
  if (err)
    console.log("Server startup failed.");
   else
    console.log(`Server listening on port ${PORT}`);
});