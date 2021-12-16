//a module with functions or objects or variables assigned to it
const express = require('express')
//function is used to mount the specified middleware function(s) at the path which is being specified
const app = express()
//This app starts a server and listens on port 4000 for connections
const port = 4000
//package for providing a Connect/Express middleware that can be used to enable CORS with various options
const cors = require('cors');
//responsible for parsing the incoming request bodies in a middleware before handling it
const bodyParser = require("body-parser");
// include mongoose in a project
const mongoose = require('mongoose');
//add path used with express
const path = require('path');
//allows email sending
const nodemailer = require('nodemailer');


//will enable the express server to respond to preflight requests. 
//A preflight request is basically an OPTION request sent to the server before the actual request is sent, in order to ask which origin and which request options the server accepts
app.use(cors());

// request object ( req ), the response object ( res ), and the next function in the application's request-response cycle.
//The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware
app.use(function (req, res, next) {
    //an Access-Control-Allow-Origin response header to tell the browser that the content of this page is accessible to certain origins
    res.header("Access-Control-Allow-Origin", "*");
    //indicate which methods to use
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();//It passes control to the next matching route
});//end app.use

//parse application/www-form-urlencoded
//The extended option allows to choose between parsing the URL-encoded data 
//with the querystring library (when false) or the qs library (when true). 
//The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format, 
//allowing for a JSON-like experience with URL-encoded
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json
app.use(bodyParser.json())

//for Nodemailer to send mails, it needs to have a SMTP protocol used by email hosts
const contactEmail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: "username",
      pass: "password"
    }
  });//end SMTP

// verify connection configuration
contactEmail.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});//end verification

//set up the POST route to send the content of the contact form
app.post('/contactForm', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var subject = req.body.subject
    var message = req.body.message
  
    var mail = {
      from: name,
      to: "katarzynakrakowska1@gmail.com",
      subject: subject,
      text: message
    }
  
    contactEmail.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
  })//end app.post

//connect to MongoDB using connection string (need to change password and db name)
const newConnectionString = 'mongodb+srv://admin:admin@cluster0.qjgmc.mongodb.net/gallery?retryWrites=true&w=majority';
mongoose.connect(newConnectionString, { useNewUrlParser: true });

//definning schema and making a data model
const Schema = mongoose.Schema;
//type of data stored in db
var photoSchema = new Schema({
    title: String,
    price: String,
    poster: String,
});

//new model for db with movie collection in photoSchema
var PhotoModel = mongoose.model("gallery", photoSchema);

//function define a route handler for GET requests to a given URL (JSON)
app.get('/api/photos', (req, res) => {

    //find all documents in db
    //find() method is used to select documents in a collection and return a cursor to the selected documents. 
    //Cursor means a pointer that points to a document, when we use find() method it returns a pointer on the selected documents and returns one by one
    PhotoModel.find((err, data) => {
        res.json(data);
    })//end PhotoModel.find
})//end app.get (define a route handler for GET requests to a given URL (JSON))

//method listens for get request
app.get('/api/photos/:id', (req, res) => {
    console.log(req.params.id);
    //returns photos id
    //findById() function is used to find one document by its _id
    PhotoModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})//end app.get

//routes the HTTP PUT requests to the specified path with the specified callback functions
app.put('/api/photos/:id', (req, res) => {
    console.log("Update Photo: " + req.params.id);
    console.log(req.body);

    //used to find a matching document using id, update it according to the update arg, 
    //passing any options, and returns the found document (if any) to the callback
    PhotoModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data);
        })//end PhotoModel.fBIAU
})//end app.put

//function is used to route the HTTP DELETE requests to the path which is specified as parameter with the callback functions being passed as parameter.
app.delete('/api/photos/:id', (req, res) => {
    console.log("Delete Photo: " + req.params.id);

    //function is used to find a matching document, removes it, and passing the found document (if any) to the callback.
    PhotoModel.findByIdAndDelete(req.params.id, (err, data) => {
        //sends data on update
        res.send(data);
    })//endPhotoModel.fBIAD
})//end app.delete


//function define a route handler for POST requests using the BODY
app.post('/api/photos', (req, res) => {
    //This function sends photos data in the response
    console.log('Complete');
    console.log(req.body.title);
    console.log(req.body.price);
    console.log(req.body.poster);

    //write to db
    PhotoModel.create({
        title: req.body.title,
        price: req.body.price,
        poster: req.body.poster,
    })//end PhotoModel.create

    //response send back to the client from server to stop multiple create
    res.send('New Photo Added')
})//end app.post

//used to bind and listen the connections on the specified host and port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})//end app.listen