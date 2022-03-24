const Engineer = require(`../lib/Engineer`);

describe('Engineer', () => {
    it('Should ask for the Engineers GitHub username', () => {
        const engineerGithub = 'wbgc728';
        const exGithub = new Engineer('Brandon', 333333, 'test@test.com', engineerGithub);
        expect(exGithub.getGithub()).toEqual(engineerGithub);
    });

    it('Should return the role "Intern"', () => {
        const engineerRole = 'Engineer';
        const exRole = new Engineer('Brandon', 333333, 'test@test.com', 'wbgc728');
        expect(exRole.getRole()).toEqual(engineerRole);
    });
})