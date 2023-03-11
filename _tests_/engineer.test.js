const Engineer = require('../lib/engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Dean', 70, 'dpb@gmail.com', 'deebo18');

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Dean', 70, 'dpb@gmail.com', 'deebo18');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Dean', 70, 'dpb@gmail.com', 'deebo18');

    expect(engineer.getRole()).toEqual("Engineer");
});