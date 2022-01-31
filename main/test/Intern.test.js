const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an valid Employee object", () => {
       const data=     {
                InternName: 'Sarah',
                InternId: 3,
                InternEmail: 'abc@123.com',
                InternSchool: 'sff'
              }
            const intern = new Intern(data);

            expect(intern.name).toEqual("Sarah");
            expect(intern.id).toEqual(3);
            expect(intern.email).toEqual("abc@123.com");
            expect(intern.internSchool).toEqual("sff");
        });
    });
});
