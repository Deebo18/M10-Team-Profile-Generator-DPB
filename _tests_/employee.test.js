// Employee constructor
const Employee = require('../lib/employee');

describe('Employee', () => {
    test('creates an employee object', () => {
        const employee = new Employee('Dean', '007', 'dpb@gmail.com');

        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    });
    // Gets employees name from getName()
    test('gets employee name', () => {
        const employee = new Employee('Dean', '007', 'dpb@gmail.com');
    
        expect(employee.getName()).toEqual(expect.any(String));
    });
    // Gets employees name from getId()
    test('gets employee id', () => {
        const employee = new Employee('Dean', '007', 'dpb@gmail.com');
    
        expect(employee.getId()).toEqual(expect.any(number));
    });
    // Gets employees name from getName()
    test('gets employee name', () => {
        const employee = new Employee('Dean', '007', 'dpb@gmail.com');
    
        expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
    });
    // Gets role from getRole()
    test('gets role of employee', () => {
        const employee = new Employee('Dean', '007', 'dpb@gmail.com');

        expect(employee.getRole()).toEqual("Employee");
    });
});
