// Import required modules and classes
import { Person } from './Classes/Person';
import { Employee } from './Classes/Employee';
import { Logger } from './Classes/Logger';

// Import and set up Express
const express = require ('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Use middleware to parse JSON requests
app.use(bodyParser.json());

// Create a new instance of the Logger class
const logger = Logger.getInstance('info');


// Create arrays of Person and Employee objects
const persons: Person[] = [
  new Person('John', 25),
  new Person('Jane', 30)
];

const employees: Employee[] = [
  new Employee('Bob', 35, 1, 50000),
  new Employee('Alice', 28, 2, 60000)
];


// Set up Express routes for handling HTTP requests
// GET request to the root URL
app.get('/', (req: any, res: any) => {
  logger.info('GET /');
  res.send('Server is running!');
});

// GET request to retrieve all persons
app.get('/persons', (req: any, res: any) => {
  logger.info('GET /persons');
  res.json(persons);
});

// POST request to add a new person
app.post('/persons', (req: any, res: any) => {
  logger.info('POST /persons');
  const { name, age } = req.body;
  const person = new Person(name, age);
  persons.push(person);
  res.status(201).json(person);
});

// DELETE request to remove a person by name
app.delete('/persons/:name', (req: any, res: any) => {
  logger.info('DELETE /persons/:name');
  const { name } = req.params;
  const index = persons.findIndex(person => person.name === name);
  if (index !== -1) {
    persons.splice(index, 1);
    res.sendStatus(204);
  } else {
    logger.warn(`Person with name ${name} not found`);
    res.status(404).send('Person not found');
  }
});

// GET request to retrieve a person by name
app.get('/persons/:name', (req: any, res: any) => {
  logger.info('GET /persons/:name');
  const { name } = req.params;
  const person = persons.find(person => person.name === name);
  if (person) {
    res.json(person);
  } else {
    logger.warn(`Person with name ${name} not found`);
    res.status(404).send('Person not found');
  }
});

// GET request to retrieve all employees
app.get('/employees', (req: any, res: any) => {
  logger.info('GET /employees');
  res.json(employees);
});

// POST request to add a new employee
app.post('/employees', (req: any, res: any) => {
  logger.info('POST /employees');
  const { name, age, id, salary } = req.body;
  const employee = new Employee(name, age, id, salary);
  employees.push(employee);
  res.status(201).json(employee);
});

// DELETE request to remove an employee by ID
app.delete('/employees/:id', (req: any, res: any) => {
  logger.info('DELETE /employees/:id');
  const { id } = req.params;
  const index = employees.findIndex(employee => employee.id === parseInt(id));
  if (index !== -1) {
    employees.splice(index, 1);
    res.sendStatus(204);
  } else {
    logger.warn(`Employee with ID ${id} not found`);
    res.status(404).send('Employee not found');
  }
});

// GET request to retrieve an employee by ID
app.get('/employees/:id', (req: any, res: any) => {
  logger.info('GET /employees/:id');
  const { id } = req.params;
  const employee = employees.find(employee => employee.id === parseInt(id));
  if (employee) {
    res.json(employee);
  } else {
    logger.warn(`Employee with ID ${id} not found`);
    res.status(404).send('Employee not found');
  }
});

// Making the app to start listening on the defined port
app.listen(PORT, () => {
  logger.info(`Server is listening on port ${PORT}`);
  console.log(`Server is listening on port ${PORT}`);
});




































