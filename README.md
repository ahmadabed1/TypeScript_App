# TypeScript App

![SeaLights_Logo_Black__2_Logo](https://user-images.githubusercontent.com/73169815/236030228-315c49b4-d196-462a-8912-954982925a55.jpg)


In this TypeScript project, classes, inheritance, and modules are demonstrated. This project consists of three classes - Person, Employee, and Logger - as well as an app.ts file that uses these classes to create an HTTP server.

## Running the Project
1. Clone the project from the repository.
 
  ```bash
git clone https://github.com/ahmadabed1/TypeScript_App.git
```
 
Navigate to the root folder of the project.

2. Install the dependencies and nodemon by running the command:

  ```bash
npm install

```
 <img width="595" alt="צילום מסך 2023-05-03 192211" src="https://user-images.githubusercontent.com/73169815/235978633-c50f2d52-697f-46ee-ae33-5410242ad1cc.png">


3. Run the project by running the command
```bash
nodemon sealights.ts
```
 <img width="659" alt="צילום מסך 2023-05-03 202933" src="https://user-images.githubusercontent.com/73169815/235996731-371ea3fb-c899-4a2d-944c-86e370a75885.png">




## Project Structure


##### TypeScript_App
The source code for the project can be found in this folder.
1. #### Person.ts:

The classes file contains the Person class.

2. ####  Employee.ts:

Employee extends Person in the classes file.

3. #### Logger.ts:

The classes file contains the Logger class, which logs messages.

4. #### sealights.ts: 

Server code is contained in the classes file.

<img width="117" alt="צילום מסך 2023-05-03 205127" src="https://user-images.githubusercontent.com/73169815/236002874-979df4d6-ae7b-422a-9ab0-b709da463e2f.png">



## Classes

### Person 
Person represents a person with a name and an age. The properties of it are as follows:

**name:** The name of the person is represented by a string.

**age:** The person's age is represented by a number.

##### Additionally, it has the following methods:

**constructor(name: string, age: number):** The constructor method that creates a new Person object with the given name and age.

**greet():** void: A method that logs a greeting message to the console.
**getAge():** number: A method that returns the age of the person.


---

### Employee


The Employee class extends the Person class and represents an employee with an ID and a salary. It has the following properties:

**id:** A number representing the ID of the employee.
**salary:** A number representing the salary of the employee.
##### It also has the following methods:

**constructor(name: string, age: number, id: number, salary: number):** The constructor method that creates a new Employee object with the given name, age, id, and salary.
**work():** void: A method that logs a message to the console indicating that the employee is working.
**getSalary():** number: A method that returns the salary of the employee.
Logger


---

### Logger

class is used to log messages to the console. It has the following properties:

**level:** A string representing the log level.
**levels:** An object that maps log levels to their corresponding numbers.


##### It also has the following methods:

**constructor(level: string):** The constructor method that creates a new Logger object with the given level.

**log(level: string, message: string):** A method that logs a message to the console with the given level and message.

**debug(message: string):** A method that logs a debug message to the console.

**info(message: string):** A method that logs an info message to the console.

**warn(message: string):** A method that logs a warning message to the console.

**error(message: string):** A method that logs an error message to the console.

<img width="474" alt="צילום מסך 2023-05-03 215744" src="https://user-images.githubusercontent.com/73169815/236016917-311808b6-6540-4464-a8a7-55b1455730c3.png">

---

### sealights.ts
The sealights.ts file creates a simple server that handles HTTP requests.
This is an Express.js server that defines several API endpoints to manage two arrays of objects: persons and employees. It also uses a custom logger to record the API calls.
Here's an overview of the API endpoints:

**GET/:** A simple endpoint that returns the message "Server is running!" to indicate that the server is running correctly.

**GET/persons:** Returns the persons array in JSON format.

**POST/persons:** Adds a new person to the persons array based on the data sent in the request body. The request body must contain the fields name and age. The endpoint returns the newly created person in JSON format with a 201 Created HTTP status code.

**DELETE/persons/:name:** Deletes the person with the given name from the persons array. If the person is found, the endpoint returns a 204 No Content status code. If the person is not found, it returns a 404 Not Found status code with an error message.

**GET /persons/: name:** Returns the person with the given name in JSON format. If the person is found, it returns a 200 OK status code. If the person is not found, it returns a 404 Not Found status code with an error message.

**GET /employees:** Returns the employees array in JSON format.

**POST/employees:** Adds a new employee to the employees array based on the data sent in the request body. The request body must contain the fields name, age, id, and salary. The endpoint returns the newly created employee in JSON format with a 201 Created HTTP status code.

**DELETE /employees/: id:** Deletes the employee with the given ID from the employees array. If the employee is found, the endpoint returns a 204 No Content status code. If the employee is not found, it returns a 404 Not Found status code with an error message.

**GET /employees/id:** Returns the employee with the given ID in JSON format. If the employee is found, it returns a 200 OK status code. If the employee is not found, it returns a 404 Not Found status code with an error message.

**The server listens on port 3000**, and logs each API call using the custom logger created in the Logger.ts file. The body-parser middleware is used to parse the request body. The Person.ts and Employee.ts files define the Person and Employee classes used to create new objects.


---

**Note:** I didn't use better data management like Mongoose and similar because I wanted to stick to the assignment requirements exactly.
In general, in the assignment we were required to work mainly on the server side, but in the structure of an application there are three sides, server - client - data.

**Another note:** in the bonus part of the assignment, we were asked to identify a person by ID, but a person-type object did not have a unique identifier like an employee-type object, so I used the person's name, but it is important to note that the name is not a good use because it is not a primary key.

## Tests 



To tease the project, we use Postman, which is an API platform for building and using APIs.

**Follow the link to download Postman:**

https://www.postman.com/downloads/


To start the test, use the lockalhost link to Postman: http://localhost:3000/

Some examples follow :

Get `http://localhost:3000/persons`

<img width="955" alt="צילום מסך 2023-05-02 202112" src="https://user-images.githubusercontent.com/73169815/236011707-472da2df-ccb3-4418-8d30-dfaff68b25ce.png">

Get `http://localhost:3000/persons/Ahmad` Person not found .

<img width="958" alt="צילום מסך 2023-05-02 202030" src="https://user-images.githubusercontent.com/73169815/236011975-2cd219e1-82e8-455f-b871-8816c0dc30b5.png">

Post `http://localhost:3000/persons/Ahmad`

To make a post request you must send the data in the body

<img width="958" alt="צילום מסך 2023-05-03 002420" src="https://user-images.githubusercontent.com/73169815/236012542-89ea89cf-72fb-4e20-877e-061a68ad448e.png">

Delete `http://localhost:3000/persons/dodo` Person not found 

<img width="567" alt="צילום מסך 2023-05-03 002534" src="https://user-images.githubusercontent.com/73169815/236013391-e2d1c78a-0664-446a-a996-e7a5ca7405c5.png">


Get `http://localhost:3000/employees`

<img width="957" alt="צילום מסך 2023-05-03 214851" src="https://user-images.githubusercontent.com/73169815/236015025-ac1e6d14-f64d-414e-b73f-5326a4102e5f.png">


**Log file:**

<img width="322" alt="צילום מסך 2023-05-03 003122" src="https://user-images.githubusercontent.com/73169815/236013550-543eb298-5c69-4d23-b636-34ebe4f99285.png">





