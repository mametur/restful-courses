// express framework
const express = require('express');
const app = express();
//const courses = require('./data/courses.json')
// file system module
const fs = require('fs');
const Joi = require('joi')

app.use(express.json());

// this method get arguments; first->Url, Second->Callback(request,respond)
app.get('/', function (req, res) {
	res.send(`Group1`);
});


// read courses.json file
const filePath = __dirname + '/data/courses.json';

// callback is added
const content = fs.readFile(filePath, 'utf-8',(err,data)=>{
	if(err){
		console.error(err)
	}
	JSON.parse(data)
});


app.get('/data/courses.json', function (req, res) {
	console.log(content);
	
	//display json data  on the localhost with relative path
	res.send(content);
});

app.post('/data/courses.json',(req,res)=>{
	const result = validateCourse(req.body);
    const { error } = validateCourse(req.body);
	  if(error) return res.status(400).send(result.error.details[0].message);
	 
	// unfortunately `const name = process.argv[2]` was not working for me;
	 
	const course ={
		id:parsedContent.length+1,
		name: req.body.name,
	}
	
	const write = JSON.stringify(course,null,4);
	
	// callback is Added
	
  const writeData= fs.writeFile(filePath, write,'utf-8', (err,data)=>{
	  if(err){
		  res.status(500).send(err.message)
	  }
	  JSON.parse(data)

   });
   
   console.log(writeData);
   res.send(writeData);

	
})


function validateCourse(course) {
    const schema =Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(course);
    
}
// environment variable for port
const port = process.env.PORT || 3000;
// start listen to application, it takes two arguments; first-> portNumber second=> a function can execute when it starts listening
app.listen(port, () => console.log(`Listening on port ${port}`));
