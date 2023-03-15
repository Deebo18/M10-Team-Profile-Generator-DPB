const Intern = require('../lib/intern');

it('create an intern object', () => {
    const intern = new Intern('Dean', 70, 'dpb@gmail.com', 'UCLA');

    expect(intern.school).toEqual(expect.any(String));
});
it('gets employees school', () => {
    const intern = new Intern('Dean', 70, 'dpb@gmail.com', 'UCLA');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
it('gets role of employee', () => {
    const intern = new Intern('Dean', 70, 'dpb@gmail.com', 'UCLA');

    expect(intern.getRole()).toEqual("Intern");
});