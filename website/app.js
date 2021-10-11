/* Global Variables */
const dateElement= document.getElementById('date')
const tempElement= document.getElementById('temp')
const contentElement= document.getElementById('content')


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDay()+'.'+ d.getFullYear();
console.log(newDate);

// Personal API Key for OpenWeatherMap API
let apiurl='api.openweathermap.org/data/2.5/weather?zip=';
let key='a2522db804c82f6931b6decf6cf22e32';


// Event listener to add function to existing HTML DOM element
const Genbtn=document.getElementById('generate');
Genbtn.addEventListener('mouseover',rclass);
Genbtn.addEventListener('mouseleave',leavef);
Genbtn.addEventListener('click',genbtnevent);


/* Function called by event listener */
function genbtnevent(e){
	
	e.preventDefault();
	const zipElement =document.getElementById('zip').value;
	const feelingsElement=document.getElementById('feelings').value;
	const finalurl=`http://${apiurl}${zipElement},us&appid=${key}`
	
    getdata(finalurl)
	.then(function(data){
	console.log(data)
	postdata('/add',{date:d,temp:data.main.temp,content:feelingsElement})
	dataview();
	
})
};
function rclass(e){
	e.preventDefault
	Genbtn.classList.add('buttonclick')
}
function leavef(e){
	e.preventDefault
	Genbtn.classList.remove('buttonclick')
}

/* Function to GET Web API Data*/
const getdata =async(finalurl)=>{
	const response= await fetch(finalurl);
	console.log(response);
	
	try {
		
		const data= await response.json();
		return data
		console.log(data);
			}catch(error){
		console.log('error',error);
			alert("h3");
		
	}
	
	
};

/* Function to POST data */
const postdata =async(url='',data={})=>{
		
	console.log(data)
	const response=await fetch(url,{
		method:'post',
		credentials:'same-origin',
		headers:{'Content-Type':'application/JSON',
		},
		body:JSON.stringify(data)
});
try {
	const newdata=await response.json();
return newdata
}catch(error){
	console.log("error",error)
}
	
}

/* Function to GET Project Data */
const dataview =async()=>{
		
		const response=await fetch('/all');
try {
	const dataarray=await response.json();
dateElement.innerHTML=dataarray.date
tempElement.innerHTML=dataarray.temp
contentElement.innerHTML=dataarray.content
}catch(error){
	console.log("error",error)
}
	
}
