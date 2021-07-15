// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [  
    {
    type: 'input',
    name: 'github',
    message: "Please provide your GitHub username.",
  },
  {
    type: 'input',
    name: 'email',
    message: "Please provide your email address.",
  },
  {
    type: 'input',
    name: 'description',
    message: "Please provide a description of your repository.",
  },
  {
    type: 'input',
    name: 'installation',
    message: "What do we need to run in order to install this application.",
    default: "npm install"
  },
  {
    type: 'input',
    name: 'usage',
    message: "What does the user need to know for the project?",
  },
  {
    type: 'input',
    name: 'credits',
    message: "List any other colloborators and partners.",
  },
  {
    type: 'input',
    name: 'license',
    message: "Please provide a license of your repository.",
    choices: ['none', 'MIT', 'GPL 3.0', 'BSD 3'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: "Please provide a description of your repository.",
  },
  {
    type: 'input',
    name: 'badges',
    message: "Please provide a description of your repository.",
  },];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(inquirerAnswers => {
        writeToFile('README.md', generateMarkdown({ ...inquirerAnswers}))
    });
}
// Function call to initialize app
init();
