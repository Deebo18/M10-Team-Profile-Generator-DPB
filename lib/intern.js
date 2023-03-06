// Importing Employee constructor 
const Employee = require('./employee');

// Intern constructor extends the Employee constructor 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email); 

        this.school = school; 
    }

    // Returning school from input 
    getSchool () {
        return this.school;
    }

    // Overrides employee role to Intern
    getRole () {
        return "Intern";
    }
}

// Intern to be exported 
module.exports = Intern; 