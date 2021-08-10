// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function promptUser(){
    return inquirer.prompt([
        //const questions = [
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
        name: 'contributing',
        message: 'Is there contribution guidelines?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Is there project test instructions?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for this application:',
        choices: ['AGPL-3.0', 'GPL-3.0', 'MIT', 'MPL-2.0', 'Unlicense']
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
])};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, err => {
//         if (err) throw err;
//         console.log('README file has been generated!');
//        });
//     }

// TODO: Create a function to initialize app
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateMarkdown(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
};

// Function call to initialize app
init();
