# Development Strategy

> `Restful Courses`

This project aims to build server using `Express.js` framework in the `Node.js`. There are  three main steps for each HTTP method to achieve it successfully .  Firstly, use `Express.js`  RESTful  methods such as `app.get(), app.method()`. Secondly,  read a file from the file system to do that using by `fs module`. In the second phase basically reads the data from the database `(json file)` and then writing some logics and modifying data. Finally,  if it is necessary to write files, then write the file in the relative path using by `fs module`.​

## 0. Set-Up

_A User can see the initial repository and live demo_

### Repository

- Created a new repository
- Clone the repository
- Write initial, basic README
- Start the development strategy
- Prepare a project board
- Push the changes to GitHub
- Turn on GitHub Pages

## 1. Get All courses

**As a site visitor, I want to see all courses list on the terminal or localhost so that I can examine the list.**

This user story has been developed through a branch called 'getAll'.

> Assign to **Mamé Azad**

### Node.js

- import express framework
- import fs module
- write logic to show all list on the terminal or postman

## 2. POST courses

**As a site visitor, I want to be able to post new object from postman and render it on the terminal or localhost with the other lists.**

This user story has been developed through a branch called 'post'.

> Assign to **Gelila Ali**

### Node.js

- import express framework
- import fs module
- import joi framework
- write logic to post a new list on the postman

## 3. Update courses

**As a site visitor, I want to be able to modify a specific course either through the address bar in the browser or via the postman utility.**

This user story has been developed through a branch called 'put'.

> Assign to **Eltayeb**

### Node.js

- Read the file system in this path `${__dirname}/courses.json` which contain the courses in a json format.
- Search for the desired course if not exist then early return.
- If the course exist validate the incoming data using `validateCourse` function.
- Do the required modification.
- Write the data back to the file system.
- Do the necessary test cases using both the browser and postman tool.

## 4. Delete course by the given ID

**As a site visitor, I want to be able to delete a specific course by the given ID.**

This user story has been developed through a branch called 'delete'.

> Assign to **Aleksandra**

### Node.js

- Read the file system following the path `${__dirname}/courses.json` which contain the courses in a json format.
- Search for the required course, if it doesn't -throw an error and return
- If the course exists - delete it
- Write the data back to the file system.

## 5. Get single course

**As a site visitor, I want to be able to get a single course by providing the ID of the course in the browser or via the Postman.**

This user story has been developed through a branch called 'get-single-course'.

> Assign to **Miroslav**

### Node.js

- Install express framework
- Import fs module
- Search for the required course with a given ID, if it doesn't exist throw an error and return
- If the course with a given ID exist, then show the course
