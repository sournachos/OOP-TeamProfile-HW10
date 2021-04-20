const inquirer = require("inquirer");//Node library use to take in user input
const fs = require("fs");//Standard Node library to interact with other files

// Asking user for the team's manager info
function mainQs(){ inquirer.prompt([
    {type:'input', message:"Enter Your Team Manager's Name:", name:'managerName'},
        {type:'number', message:"Enter Your Team Manager's Employee ID:", name:'managerId'},
            {type:'input', message:"Enter Your Team Manager's Email:", name:'managerEmail'},
                {type:'input', message:"Enter Your Team Manager's Office Number:", name:'managerOfficeNumber'},
]).then((res)=> {
        const managerHtml = `<div class="team-area mx-2 my-4 w-30 bg-secondary text-light text-center rounded-lg">
                                ${res.managerName} <br> <strong>Manager</strong> <br>
                                <table class="table table-dark table-hover">
                                <tr><td>ID: ${res.managerId}</td></tr><br>
                                <tr><td>Email: <a href="mailto:${res.managerEmail}">${res.managerEmail}</a></td></tr>
                                <tr><td>Office Number: ${res.managerOfficeNumber}</td></tr>
                                </table>
                                </div>`
        fs.appendFile('templates/main.html', managerHtml, (err)=>{console.error(err)})
})}

//Ask user if they want to add an engineer or an intern
function addEngOrInt(){ inquire.prompt([{type:'checkbox', message:'Do you want to add a Team Engineer or Team Intern?', choices:['Engineer', 'Intern', 'No Thanks, I Am Finished Building My Team ;)'], name:'EngOrIntChoice'}])}

//Function if user wants to add an Engineer
function AddEng(){ inquirer.prompt([
    {type:'input', message:"Enter Your Team Engineer's Name:", name:'engName'},
        {type:'number', message:"Enter Your Team Engineer's Employee ID:", name:'engId'},
            {type:'input', message:"Enter Your Team Engineer's Email:", name:'engEmail'},
                {type:'input', message:"Enter Your Team Engineer's Github Username:", name:'engGit'}
]).then((res)=> {
        const engineerHtml = `<div class="team-area mx-2 my-4 w-30 bg-secondary text-light text-center rounded-lg">
                                ${res.engName} <br> <strong>Engineer</strong> <br>
                                <table class="table table-dark table-hover">
                                <tr><td>ID: ${res.engId}</td></tr><br>
                                <tr><td>Email: <a href="mailto:${res.engEmail}">${res.engEmail}</a></td></tr>
                                <tr><td>Github: <a href="https://github.com/${res.engGit}">${res.engGit}</a></td></tr>
                                </table>
                                </div>`
        // fs.readFile('templates\main.html',(err)=>{console.error(err)})
        fs.appendFile('templates/main.html', engineerHtml, (err)=>{console.error(err)})
})}

//Function if user wants to add an Intern 
function AddInt(){ inquirer.prompt([
    {type:'input', message:"Enter Your Team Intern's Name:", name:'intName'},
        {type:'number', message:"Enter Your Team Intern's Employee ID:", name:'intId'},
            {type:'input', message:"Enter Your Team Intern's Email:", name:'intEmail'},
                {type:'input', message:"Enter Your Team Intern's School Name:", name:'intSchool'}
]).then((res)=> {
        const internHtml = `<div class="team-area mx-2 my-4  w-30  bg-secondary text-light text-center rounded-lg">
                                ${res.intName} <br> <strong>Intern</strong> <br>
                                <table class="table table-dark table-hover">
                                <tr><td>ID: ${res.intId}</td></tr><br>
                                <tr><td>Email: <a href="mailto:${res.intEmail}">${res.intEmail}</a></td></tr>
                                <tr><td>School: ${res.intSchool}</td></tr>
                                </table>
                                </div>`
        // fs.readFile('templates\main.html',(err)=>{console.error(err)})
        fs.appendFile('templates/main.html', internHtml, (err)=>{console.error(err)})
})}

//Closing tags to append to main.html after all the employee cards have been appended to main.html
const closeHtml = `</div></div></body></html>`

//Function to (init)ialize all the code above in the desired order
// ***Pending to fix. Issue lies below***
function init(){
    mainQs()
    addEngOrInt()
    if(res.EngOrIntChoice === 'Engineer'){(AddEng()).then(addEngOrInt())}
    else if(res.EngOrIntChoice === 'Intern'){(AddInt()).then(addEngOrInt())}
    else{
        fs.appendFile('templates/main.html', closeHtml, (err)=>{console.error(err)})
        console.log('Your team page has been created. Take a look at main.html to check it out.')}
}


init() //Calls the function above to run