const Employee = require("./Employee");


class Intern extends Employee {
    constructor(internData) {
        super(internData.InternName, internData.InternId, internData.InternEmail);
        this.internSchool = internData.InternSchool;

    }
    getRole() {
        return "Intern"
    }
    getInternSchool() {
        return this.internSchool
    }
    
}

module.exports = Intern;