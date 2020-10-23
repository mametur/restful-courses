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



app.get('/data/courses.json', function (req, res) {

fs.readFile(filePath, 'utf-8',(err,data)=>{
	if(err){
		console.error(err)
	}
	JSON.parse(data)
	
	//display json data  on the localhost with relative path
	
	res.send(data);
});
		
});

app.post('/data/courses.json',(req,res)=>{
	const result = validateCourse(req.body);
    const { error } = validateCourse(req.body);
	  if(error) return res.status(400).send(result.error.details[0].message);
	 
	
	 fs.readFile(filePath, 'utf-8',(err,data)=>{
	if(err){
		console.error(err)
	}
	//JSON.parse(data);
	let myCourses = JSON.parse(data);

const course ={
		id:myCourses.length+1,
		name: req.body.name,
	}
   myCourses.push(course);

   const write = JSON.stringify(myCourses,null,4);

   fs.writeFile(filePath, write,'utf-8', (err,data)=>{
	  if(err){
		  res.status(500).send(err.message)
	  }  

   });
	 res.send(myCourses);
});
		
})


function validateCourse(course) {
    const schema =Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(course);
    
}

// delete by ID

app.delete('/data/courses.json/:id', (req, res) => {
    // read the file system and look up the course by ID
    // if doesn't exist - return 404
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            return console.error(err);
		}
		
        let myCourses = JSON.parse(data);
		const removeCourse = myCourses.find((c) => c.id === parseInt(req.params.id));
		
		if (!removeCourse) return res.status(404).send('The course with the given ID was not found');
        
        // delete
        console.log('this will be deleted ', removeCourse);
        const index = myCourses.indexOf(removeCourse);
        myCourses.splice(index, 1);
		res.send(removeCourse);
		
        // re-writing the JSON file after deleting one of the courses
        const write = JSON.stringify(myCourses, null, 4);
        console.log('write json file again');
        fs.writeFile(filePath, write, 'utf-8', (err, data) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            console.log('Course was successfully deleted');
        });
    });
});

// environment variable for port
const port = process.env.PORT || 3000;
// start listen to application, it takes two arguments; first-> portNumber second=> a function can execute when it starts listening
app.listen(port, () => console.log(`Listening on port ${port}`));