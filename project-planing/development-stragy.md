# Development Strategy

> `Restful Courses`

Will be filled later.

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
