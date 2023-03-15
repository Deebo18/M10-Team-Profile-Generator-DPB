// Employee constructor
const Employee = require('../lib/employee');

it('creates an employee object', () => {
    const employee = new Employee('Dean', 70, 'dpb@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
    // Gets employees name from getName()
it('gets employee name', () => {
        const employee = new Employee('Dean', 70, 'dpb@gmail.com');
    
        expect(employee.getName()).toEqual(expect.any(String));
});
    // Gets employees name from getId()
it('gets employee id', () => {
    const employee = new Employee('Dean', 70, 'dpb@gmail.com');
    
    expect(employee.getId()).toEqual(expect.any(Number));
});
    // Gets employees name from getName()
it('gets employee name', () => {
    const employee = new Employee('Dean', 70, 'dpb@gmail.com');
    
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
    // Gets role from getRole()
it('gets role of employee', () => {
    const employee = new Employee('Dean', 70, 'dpb@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});

