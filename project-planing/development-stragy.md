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

## 1. POST courses

**As a site visitor, I want to be able to post new object from postman and render it on the terminal or localhost with the other lists.**

This user story has been developed through a branch called 'post'.

> Assign to **Gelila Ali**

### Node.js

- import express framework
- import fs module
- import joi framework
- write logic to post a new list on the postman

## 4. Delete course by the given ID

**As a site visitor, I want to be able to delete a specific course by the given ID.**

This user story has been developed through a branch called 'delete'.

> Assign to **Aleksandra**

### Node.js

- Read the file system following the path `${__dirname}/courses.json` which contain the courses in a json format.
- Search for the required course, if it doesn't -throw an error and return
- If the course exists - delete it
- Write the data back to the file system.
