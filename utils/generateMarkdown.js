// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){
    return `![github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  else{
    return ''
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
  function renderLicenseLink(license) {
    if(license){
      return `* [License](#license)`
    }
    else {
      return ''
    }


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `## License
    This project has a license of ${license}`
  } 
  else{
    return ''
  }
  }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName} ${renderLicenseBadge(data.license)}

## Description 

${data.description}


## Table of Contents 

* [Languages](#languages)
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Credits](#credits)
${renderLicenseLink(data.license)}

## Languages

${data.languages}

## Installation

${data.installation}


## Usage 

${data.usage}

## Contributions
${data.contributions}

${renderLicenseSection(data.license)}

## Tests
${data.tests}

## Questions
To contact me about this project please visit my [github](https://github.com/${data.github}) or send me an email at this address [${data.address}](${data.address})
`;
}

module.exports = generateMarkdown;
