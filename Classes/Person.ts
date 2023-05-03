export class Person {
  name: string; // The name of the person.
  age: number; // The age of the person.

  /**
   * Creates a new Person object with the given name and age.
   * @param name - The name of the person.
   * @param age - The age of the person.
   */
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  /**
   * Prints a greeting message to the console.
   */
  greet(): void {
    console.log(`Hello, my name is ${this.name}.`);
  }

  /**
   * Returns the age of the person.
   * @returns The age of the person.
   */
  getAge(): number {
    return this.age;
  }
}
