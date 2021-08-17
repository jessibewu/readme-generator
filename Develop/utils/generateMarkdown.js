function generateMarkdown(data) {
  if (data.license === "None") {
      return `
  <h1 align="center">${data.title}</h1>
  
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
  
  ## Contributing
  👪 ${data.contributing}

  ## Tests
  ✏️ ${data.tests}

  ## Questions
  :octocat: Find me on GitHub: [${data.github}](https://github.com/${data.github})<br /><br />
  ✉️ Email me with any questions: ${data.email} <br /><br />
      `
  } else{
  
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
  This application is covered by [${data.license}](https://opensource.org/licenses/${data.license}) license. 
  
  ## Contributing
  👪 ${data.contributing}

  ## Tests
  ✏️ ${data.tests}

  ## Questions
  :octocat: Find me on GitHub: [${data.github}](https://github.com/${data.github})<br /><br />
  ✉️ Email me with any questions: ${data.email} <br /><br />

  `};
}

module.exports = generateMarkdown
