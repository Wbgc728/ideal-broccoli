const Employee = require(`../lib/Employee`);


describe('Employee', () => {
    it('Should return the Employee Name', () => {
        const employeeName = 'Bob';
        const exName = new Employee(employeeName, 12345, 'test@test.com');
        expect(exName.getName()).toEqual(employeeName);
    });

    it('Should return the Employee ID', () => {
        const employeeId = 12345;
        const exId = new Employee('Bob', employeeId, 'test@test.com');
        expect(exId.getId()).toEqual(employeeId);
    });

    it('Should return the Employee Email', () => {
        const employeeEmail = 'test@test.com';
        const exEmail = new Employee('Bob', 12345, employeeEmail);
        expect(exEmail.getEmail()).toEqual(employeeEmail);
    });

    it('Should return the role "Employee"', () => {
        const employeeRole = 'Employee';
        const exRole = new Employee('Bob', 12345, 'test@test.com');
        expect(exRole.getRole()).toEqual(employeeRole);
    });
})