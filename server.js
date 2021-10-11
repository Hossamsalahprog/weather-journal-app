// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express= require('express');


// Start up an instance of app
const app =express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors =require('cors')
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port =8000;
const server =app.listen(port,listening)
function listening(){
	console.log("server runinng");
	console.log(`running on localhost :${port}`);
}

app.post('/add',fpost)
function fpost (request ,response){
	projectData["temp"]=request.body.temp,
	projectData["date"]=request.body.date,
	projectData["content"]=request.body.content
	response.send('post received')
				
	};
	
	

app.get('/all',gdata)
function gdata (request ,response ){
	response.send(projectData)
	
}


