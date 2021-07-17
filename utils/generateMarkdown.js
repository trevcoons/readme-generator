// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![license](https://img.shields.io/badge/license-${license}-orange.svg)`
  } else return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `![license](#license)`
  } else return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License
    the project is licensed under the ${license} license`
  } else return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var gitHubLink = `[My GitHub](https://github.com/${data.github})`
  var showEmail = `If you have any questions: ${data.email}`
  return `# ${data.title}
## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributing)
* [Credits](#credits)

## Installation
${data.install}

## Usage
${data.usage}

##License
${data.license}

## Contributing
${data.contributing}

## Credits
${data.credits}

## Questions
  ${data.email ? showEmail : ''}
  ${data.github ? gitHubLink : ''}

`;
}

module.exports = generateMarkdown;
