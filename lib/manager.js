// Importing Employee constructor 
const Employee = require('./employee');

// Manager constructor extends employee constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // Calling employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // Override Employee role to Manager 
    getRole () {
        return "Manager";
    }
}

// Manager to be exported 
module.exports = Manager; 