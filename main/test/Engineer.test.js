const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an valid Engineer object", () => {
           const data =  {
            EngineerName: 'Sarah',
            EngineerId: 3,
            EngineerEmail: 'abc@123.com',
            EngineerGithub: 'gg@github.com'
          }
            const engineer = new Engineer(data);

            expect(engineer.name).toEqual("Sarah");
            expect(engineer.id).toEqual(3);
            expect(engineer.email).toEqual("abc@123.com");
            expect(engineer.engineerGithub).toEqual("gg@github.com");
        });
    });
});