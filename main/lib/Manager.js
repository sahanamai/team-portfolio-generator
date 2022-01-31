const Employee = require("./Employee");


    class Manager extends Employee {
        constructor(managerData) {
          super(managerData.managerName,managerData.managerId,managerData.managerEmail);
          this.officeNumber = managerData.officeNumber;
         
        } 
        getRole(){
            return "Manager"
        }
        getOfficeNumber(){
            return this.officeNumber
        }
        setOfficeNumber(newNum){
        this.officeNumber = newNum;
        }
}




module.exports= Manager;