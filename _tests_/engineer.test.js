const Engineer = require('../lib/engineer');

it('creates an engineer object', () => {
    const engineer = new Engineer('Dean', 70, 'dpb@gmail.com', 'deebo18');

    expect(engineer.github).toEqual(expect.any(String));
});

it('gets engineer github value', () => {
    const engineer = new Engineer('Dean', 70, 'dpb@gmail.com', 'deebo18');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

it('gets engineer github value', () => {
    const engineer = new Engineer('Dean', 70, 'dpb@gmail.com', 'deebo18');

    expect(engineer.getRole()).toEqual("Engineer");
});