function generateMarkdown(data) {
  return `
  <h1 align="center">${data.title}</h1>
  
  [![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)](https://shields.io)

  ## Description
  🔍 ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  💾 ${data.installation}

  ## Usage
  💻 ${data.usage}

  ## License
  [${data.license}](https://opensource.org/licenses/${data.license}) 

  ## Contributing
  👪 ${data.contributing}

  ## Tests
  ✏️ ${data.tests}

  ## Questions
  :octocat: Find me on GitHub: [${data.github}](https://github.com/${data.github})<br /><br />
  ✉️ Email me with any questions: ${data.email} <br /><br />

  `;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
  // function renderLicenseBadge(answers) {
  //   return `
  //   ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
  //   `
    // if (!answers.license) {
    //  return "";
    // }
 //}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//  function renderLicenseLink(license) {
//    return `
//    [License Link](https://opensource.org/licenses/${answers.license})
//    `
//    if (!answers.license) {
//     return "";
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   return `
//   ## License
//   ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
//   <br />
//   This application is covered by the ${answers.license} ${renderLicenseLink} license. 
//   `;
// }

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}
// `;
// }

module.exports = generateMarkdown;
