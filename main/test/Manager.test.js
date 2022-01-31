const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an valid Manager object", () => {
          const data =  {
                managerName: 'Sarah',
                managerId: 3,
                managerEmail: 'abc@123.com',
                officeNumber: 1
              }
            const manager = new Manager(data);

            expect(manager.name).toEqual("Sarah");
            expect(manager.id).toEqual(3);
            expect(manager.email).toEqual("abc@123.com");
            expect(manager.officeNumber).toEqual(1);
        });
    });
});