// Import Employee constructor 
const Employee = require("./employee");

// Engineer constructor extends the employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // Call employee constructor 
        super (name, id, email);

        this.github = github; 
    }

    // Returning GitHub from input 
    getGithub () {
        return this.github;
    }

     // Overrides employee role to engineer
    getRole () {
        return "Engineer";
    }
}

// Exports Engineer 
module.exports = Engineer; 