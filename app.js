const manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// const path = require("path");
const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function mainQs(){ inquirer.prompt([
    {type:'input', message:"Enter Your Team Manager's Name:", name:'managerName'},
        {type:'number', message:"Enter Your Team Manager's Employee ID:", name:'managerId'},
            {type:'input', message:"Enter Your Team Manager's Email:", name:'managerEmail'},
                {type:'input', message:"Enter Your Team Manager's Office Number:", name:'managerOfficeNumber'},
]).then((res)=> {
        //const managerAnswers = [res.managerName, res.managerId, res.managerEmail, res.managerOfficeNumber]
        const managerHtml = `<div class="team-area mx-2 my-4 w-30 bg-secondary text-light text-center rounded-lg">
${res.managerName} <br> <strong>Manager</strong> <br>
<table class="table table-dark table-hover">
<tr><td>ID: ${res.managerId}</td></tr><br>
<tr><td>Email: <a href="mailto:${res.managerEmail}">${res.managerEmail}</a></td></tr>
<tr><td>Office Number: ${res.managerOfficeNumber}</td></tr>
</table>
</div>`
        // fs.readFile('templates\main.html',(err)=>{console.error(err)})
        fs.appendFile('templates/main.html', managerHtml, (err)=>{console.error(err)})
        // const teamMembers = document.getElementById("teamMembers")
        // teamMembers.appendChild(manager(managerAnswers))

})}

function addEngOrInt(){ inquire.prompt([{type:'checkbox', message:'Do you want to add a Team Engineer or Team Intern?', choices:['Engineer', 'Intern', 'No Thanks, I Am Finished Building My Team ;)'], name:'EngOrInt'}])}

function IfAddEng(){ inquirer.prompt([
    {type:'input', message:"Enter Your Team Engineer's Name:", name:'engName'},
        {type:'number', message:"Enter Your Team Engineer's Employee ID:", name:'engId'},
            {type:'input', message:"Enter Your Team Engineer's Email:", name:'engEmail'},
                {type:'input', message:"Enter Your Team Engineer's Github Username:", name:'engGit'}
])}

function IfAddInt(){ inquirer.prompt([
    {type:'input', message:"Enter Your Team Intern's Name:", name:'intName'},
        {type:'number', message:"Enter Your Team Intern's Employee ID:", name:'intId'},
            {type:'input', message:"Enter Your Team Intern's Email:", name:'intEmail'},
                {type:'input', message:"Enter Your Team Intern's School Name:", name:'intSchool'}
])}


//Different Maybes/Possibilities
// (addEngOrInt.choices === 'Engineer') ? inquirer.prompt(IfAddEng) :  

function init(){
    mainQs()
}






init()





// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
