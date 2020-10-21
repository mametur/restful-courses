// express framework
const express = require('express');
const app = express();

// file system module
const fs = require('fs');

// this method get arguments; first->Url, Second->Callback(request,respond)
app.get('/', function (req, res) {
	res.send(`Group1`);
});

// read courses.json file
const filePath = __dirname + '/data/courses.json';
const content = fs.readFileSync(filePath, 'utf-8');
const parsedContent = JSON.parse(content);

app.get('/data/courses.json', function (req, res) {
	console.log(parsedContent);
	//display json data  on the localhost with relative path
	res.send(parsedContent);
});

// environment variable for port
const port = process.env.PORT || 3000;
// start listen to application, it takes two arguments; first-> portNumber second=> a function can execute when it starts listening
app.listen(port, () => console.log(`Listening on port ${port}`));
