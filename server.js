// Webservice to illustrate serving static content and simple routes.
//
// Author: S. Sigman
// Date: 11/07/2023

const express = require("express")

//const quotes = require("./data/quotes.js")

// declare the data to be used
// Actually, you never want to include data this way!
const data = [
  {quote:'The programmer, like the poet, works only slightly removed from pure thought-stuff. He builds his castles in the air, from air, creating by exertion of the imagination. Few media of creation are so flexible, so easy to polish and rework, so readily capable of realizing grand conceptual structures.',
   author:'Fred Brooks'},
  {quote: 'Brooks Law: Adding manpower to a late software project makes it later!',
   author: 'Fred Brooks'},
  {quote: 'Plan to throw one (implementation) away; you will, anyhow.',
   author: 'Fred Brooks'},
  {quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
   author: 'Martin Fowler'},
  {quote: 'Program testing can be used to show the presence of bugs, but never to show their absence!',
   author: 'Edsger Dijkstra'}
]

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

// define a route to retrieve a quote
app.get("/getQuote", (req, res) => {
  let qNum = parseInt(req.query.quote_num)
  let qt = data[qNum]
  res.json(qt)
})

// create a listener on the specified port
app.listen(PORT,(err) => {
  if (err)
    console.log("Server startup failed.");
   else
    console.log(`Server listening on port ${PORT}`);
});