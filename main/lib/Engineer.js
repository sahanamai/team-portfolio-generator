const Employee = require("./Employee");


class Engineer extends Employee {
    constructor(engineerData) {
        super(engineerData.EngineerName, engineerData.EngineerId,engineerData.EngineerEmail);
        this.engineerGithub = engineerData.EngineerGithub;

    }
    getRole() {
        return "Engineer"
    }
    getEngineerGithub() {
        return this.engineerGithub
    }
    
}

module.exports = Engineer;