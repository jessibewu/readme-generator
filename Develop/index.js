// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require('inquirer');
const generateReadme = require('./utils/generateMarkdown.js');
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = []

const promptUser = () => {
    return inquirer.prompt([
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
        message: 'Please choose a license for this application.',
        choices: ['GNU', 'ISC', 'MIT', 'Mozilla', 'Open', 'SIL Open', 'Unlicense']
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
      },
]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs.writeFile('./dist/README.md', (fileName, data), err => {
    //     if (err) throw err;
    //     console.log('README file has been created!');
    //   });
    }

// TODO: Create a function to initialize app
function init() {
    // Ask user questions and generate responses
    const answers = promptUser();
    const generateContent = generateReadme(answers);
    // Write new README.md to dist directory
    writeFileAsync('./dist/README.md', generateContent);
    console.log('Successfully wrote to README.md!');
    }   // catch(err) {
    //     console.log(err);
    // }

// Function call to initialize app
init();
