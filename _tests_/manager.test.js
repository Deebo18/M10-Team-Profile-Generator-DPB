const Manager = require('../lib/manager');

it('creates a manager object', () => {
    const manager = new Manager ('Dean', 70, 'dpb@gmail.com', 2);

    expect(manager.officeNumber).toEqual(expect.any(Number));
})
it('get role of employee', () => {
    const manager = new Manager ('Dean', 70, 'dpb@gmail.com', 2);

    expect(manager.getRole()).toEqual("Manager");
})
