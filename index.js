// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')
// TODO: Create an array of questions for user input
const questions = ['Title of Project? ', 'Brief Description: '];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);
    fs.writeFile(`${data.title}.md`, generateMarkdown(data), (err) => 
    err ? console.log(err) : console.log('it works'));
}
inquirer.prompt([
    {
        type: 'input',
        name: "title",
        message: questions[0]
    },
    {
        type: 'input',
        name: "description",
        message: questions[1]
    }
]).then((data) => {
    writeToFile(data.title, data);
});






// TODO: Create a function to initialize app
// function init() {
    
// }

// // // Function call to initialize app
// init();

