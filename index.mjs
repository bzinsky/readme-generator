import inquirer from 'inquirer';
import fs from "fs/promises";
// import contributionTemplate  from '../contribution-template';


let {title, description, installation, usage, license, contribution, test, username, email, question } = await inquirer
.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a brief description of your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter the installation process for your project:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Who would use this project'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like?',
      choices: ['MIT','Mozilla','Unlicense']
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are your Contribution Guidlines'
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter the file path for your test image/gif: (ex. ./assets/ex1.jpg)'
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is you github username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?'
    },
    {
      type: 'input',
      name: 'question',
      message: 'How would user contact you for any questions regarding your project?'
    },

    // Add more prompts for other sections of the README (e.g., installation, usage, etc.)
  ])
// Generate the README content
const readmeContent = `
# ${title}

## Description

${description}

## Table of Contents


- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contibution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

${generateLicense(license)}


## Contribution

${contribution}


## Tests

![A test on how to generate README](${test})


## Questions

${username}
-----------------
${email},
-----------------
${question}${email}


`;

// Write the README content to a file
fs.writeFile('README.md', readmeContent);


function generateLicense(license){

    if(license === "MIT"){

        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        }
    else if(license === "Mozilla"){

        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
        }
    else if (license === "Unlicense"){

        return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
        }
}