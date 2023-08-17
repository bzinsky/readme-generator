import inquirer from 'inquirer';
import fs from "fs/promise";
import ListPrompt from 'inquirer/lib/prompts/list';


let { title, description, installation, usage, license, contributing, tests, github, email } = await inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "Title of the project?"
        },
        {
            type: "input",
            name: "description",
            message: "Description of the project?"
        },
        {
            type: "input",
            name: "installation",
            message: "Installation process for the project?"
        },
        {
            type: "input",
            name: "usage",
            message: "Usage of the project?"
        },
        {
            type: "list",
            name: "license",
            message: "Choose your license.",
            choices: ['Apache 2.0', 'BSD 3-Clause License', 'MIT'],
            filter(val) {
                return val.toLowerCase();
            }
        },
        {
            type: "input",
            name: "contributing",
            message: "Who contributed to the project?."
        },
        {
            type: "input",
            name: "tests",
            message: "What tests were done on the project? "
        },
        {
            type: "input",
            name: "github",
            message: "Your Github account?"
        },
        {
            type: "input",
            name: "email",
            message: "Your email address?"
        },




    ])

let readmeText = `

# ${title}             ${generateLicenseBadge(license)}
       
## Project Description
    ${description}

    ##Table of Contents

    ##Intallation

    ##Usage

    ## License
    ${generateLicense(license)}
    
    ##Contributing

    ##Tests

    ##Questions

    ### The third largest heading 
    `






fs.writeFile("README.md", readmeText)


function generateLicense(license) {

    if (license === "Apache 2.0") {

        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    if (license === "BSD 3-Clause License") {

        return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"


    }
    if (license === "MIT") {

        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"


    }



    return ``
}
