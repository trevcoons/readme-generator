// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [  
    {
    type: 'input',
    name: 'title',
     message: "Please provide a title for your project.",
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
      type: 'list',
      name: 'license',
      message: "Please provide a license of your repository.",
      choices: ['none', 'MIT', 'GPL 3.0', 'BSD 3'],
    },
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
    name: 'credits',
    message: "List any other colloborators and partners.",
  },
  {
    type: 'input',
    name: 'contributing',
    message: "Explain how users can contribute to your project (if necessary).",
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
