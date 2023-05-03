import { Person } from './Person';

export class Employee extends Person {
  id: number; // The ID of the employee.
  salary: number; // The salary of the employee.

  constructor(name: string, age: number, id: number, salary: number) {
    super(name, age); // Call the constructor of the parent class.
    this.id = id; // Set the ID property of the employee.
    this.salary = salary; // Set the salary property of the employee.
  }

  work(): void {
    console.log(`${this.name} is working.`); // Print a message to the console.
  }

  getSalary(): number {
    return this.salary; // Return the salary of the employee.
  }
}
