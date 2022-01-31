const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an valid Employee object", () => {

            const employee = new Employee("Sarah", 3, "abc@123.com");

            expect(employee.name).toEqual("Sarah");
            expect(employee.id).toEqual(3);
            expect(employee.email).toEqual("abc@123.com");
        });
    });
});
