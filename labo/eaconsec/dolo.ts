class Professional extends Person {
  occupation: string;

  constructor(name: string, age: number, exp: number, occupation: string) {
    super(name, age, exp);
    this.occupation = occupation;
  }

  // Additional methods or properties can be added here
}
