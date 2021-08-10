function generateMarkdown(answers) {
  return `
  <h1 align="center">${answers.projectTitle} 👋</h1>
  
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)

  ## Description
  🔍 ${answers.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  💾 ${answers.installation}

  ## Usage
  💻 ${answers.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
  <br />
  This application is covered by the ${answers.license} (https://opensource.org/licenses/${answers.license}). 

  ## Contributing
  👪 ${answers.contributing}

  ## Tests
  ✏️ ${answers.tests}

  ## Questions
  :octocat: Find me on GitHub: [${answers.github}](https://github.com/${answers.github})<br /><br />
  ✉️ Email me with any questions: ${answers.email} <br /><br />

  `;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//  function renderLicenseBadge(license) {
//    return `
//    ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
//    `
//    if (!answers.license) {
//     return "";
//    }
// }

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
