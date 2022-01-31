//refer from bootstrap docs-card
const generateHTML = function (team) {

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Team Portfolio</title>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
</style>
</head>
<body>
<div class="header">
<div class="jumbotron bg-primary">
   <h1 class="text-white text-center">Team Portfolio</h1>
</div>
</div>
<div class="container-body container-fluid">
   <div class="row">
        ${teamList(team)} 
    </div>
</div>
<script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script>  
</body>
</html>`

}
const teamList = (teamArray) =>{
 var str = "";
 for(i=0; i<teamArray.length; i++){
     if(teamArray[i].getRole()=="Manager"){
         str+=empManager(teamArray[i])

     }
     else if(teamArray[i].getRole()=="Intern"){
        str+=empIntern(teamArray[i])

     }
     else{
        str+=empEngineer(teamArray[i]) 
     }
 }
 return str;
}

const empManager = (Manager) => {
    return `
    <div class = "col">
    <div class="card" style="width: 18rem;">
    <div class="card-header bg-primary">
    <h3 class="card-title text-white">${Manager.getName()} </h3>
    <h4 class="card-title text-white">${Manager.getRole()} </h4>
    </div>
    <div class="card-body">
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID- ${Manager.getId()}</li>
    <li class="list-group-item">Email- <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
    <li class="list-group-item">Office number- ${Manager.getOfficeNumber()}</li>
  </ul>
  </div>
  </div>
  </div>
`;
};
const empIntern = (Intern) => {
    return `
    <div class="col">
    <div class="card" style="width: 18rem;">
    <div class="card-header bg-primary">
    <h3 class="card-title text-white">${Intern.getName()} </h3>
    <h4 class="card-title text-white">${Intern.getRole()} </h4>
    </div>
    <div class="card-body">
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID- ${Intern.getId()}</li>
    <li class="list-group-item">Email- <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
    <li class="list-group-item">Intern School- ${Intern.getInternSchool()}</li>
  </ul>
  </div>
  </div>
  </div>
`;
};

const empEngineer = (Engineer) => {
    return `
    <div class="col">
    <div class="card" style="width: 18rem;">
    <div class="card-header bg-primary">
    <h3 class="card-title text-white">${Engineer.getName()} </h3>
    <h4 class="card-title text-white"> ${Engineer.getRole()}</h4>
    </div>
    <div class="card-body">
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID- ${Engineer.getId()}</li>
    <li class="list-group-item">Email- <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
    <li class="list-group-item">Github-<a href="${Engineer.getEngineerGithub()}"> ${Engineer.getEngineerGithub()}</a></li>
  </ul>
  </div>
  </div>
  </div>
`;
};

module.exports = generateHTML;












