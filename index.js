// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['ISC', 'MIT', 'Unlicense', 'None']
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
];

// TODO: Create a function to write README file
 function writeToFile(fileName, data) {
     fs.writeFile(fileName, data, err => {
         if (err) throw err;
         console.log('Success! README file has been generated!');
        });
     }

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function (userInput) {
    console.log('Successfully wrote to README.md');
    writeToFile('./dist/README.md', generateMarkdown(userInput));
  })
};

// Function call to initialize app
init();
