// U78784426

// Defining the employee class
class Employee {constructor(name, salary) {this.name = name; this.salary = salary;
        console.log(`Employee: ${this.name}, Monthly Salary: $${this.salary}`);}

// Calculating the annual salary
calculateAnnualSalary() {return this.salary * 12;}}

// Defining the Manager subclass inheriting from Employee clas
class Manager extends Employee {constructor(name, salary, department) {super(name, salary);
    this.department = department;}

// Override annual salary calculation method to include a 15% bonus
calculateAnnualSalary() {const bonus = this.salary * 0.15; const totalSalary = this.salary * 12 + bonus;
    console.log(`Manager ${this.name} in the ${this.department} department - Bonus: $${bonus}, Total Annual Salary: $${totalSalary}`);
    return totalSalary;}}
