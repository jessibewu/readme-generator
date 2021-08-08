// TODO: Include packages needed for this application

// External Packages:
const fs = require("fs");
const util = require("util");
const inquirer = require('inquirer');

// Internal modules:
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Is there installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'IS there usage information?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Is there contribution guidelines?',
      },
      {
        type: 'input',
        name: 'testInst',
        message: 'Is there project test instructions?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for this application:',
        choices: ['GNU', 'ISC', 'MIT', 'Mozilla', 'Open', 'SIL Open', 'The Unlicense']
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
      },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log('README file has been generated!');
       });
    }

const writeFileAsync = util.promisify(writeToFile);


// TODO: Create a function to initialize app
function init() {
    try {
        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you for your responses! Fetching your GitHub data next...");
    
        // Call GitHub api for user info
        const userInfo = await api.getUser(userResponses);
        console.log("Your GitHub user info: ", userInfo);
    
        // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        console.log("Generating your README next...")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);
    
        // Write markdown to file
        await writeFileAsync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();
