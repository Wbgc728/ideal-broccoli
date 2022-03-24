const Manager = require(`../lib/Manager`)


describe('Manager', () => {
    it('Should ask for team manager office Number', () => {
        const managerOffice = 1157;
        const exNum = new Manager('Pete', 8675309, 'test@test.com', managerOffice);
        expect(exNum.getOfficeNumber()).toEqual(managerOffice);
    });

    it('Should return the role "Manager"', () => {
        const managerRole = "Manager";
        const exRole = new Manager('Pete', 8675309, 'test@test.com', 1157);
        expect(exRole.getRole()).toEqual(managerRole);
    });
})