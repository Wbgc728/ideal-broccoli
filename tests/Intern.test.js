const Intern = require(`../lib/Intern`);


describe('Intern', () => {
    it('Should ask for the interns school', () => {
        const internSchool = 'Virginia Tech';
        const exSchool = new Intern('Ken', 246810, 'test@test.com', internSchool);
        expect(exSchool.getSchool()).toEqual(internSchool);
    });

    it('Should return the role "Intern"', () => {
        const internRole = 'Intern';
        const exRole = new Intern('Ken', 246810, 'test@test.com', 'Virginia Tech');
        expect(exRole.getRole()).toEqual(internRole);
    });
})