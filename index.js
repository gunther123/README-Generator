//Reference to all required packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your Project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a detailed(How, What, Why) description of your Project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a Description!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'jQuery', 'Bootstrap', 'Node', 'Markdown', 'Python', 'C#']
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide installation steps for the project (Required)',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('You need to provide installation steps!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide intended ways for this project to be used. (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('You need to provide guidance on how this project is to be used!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'Provide instructions on how other developers can contribute. (Required)',
        validate: contributionsInput => {
          if (contributionsInput) {
            return true;
          } else {
            console.log('You need to provide guidance on how others can contribute to this project!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to add a license?',
        default: true
      },
      {
        type: 'list',
        name: 'license',
        message: 'Provide some information about yourself:',
        choices: ['GNU GPLv3', 'ICS', 'MIT'],
        when: ({ confirmLicense }) => confirmLicense
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide tests or examples for users to use. (Required)',
        validate: testsInput => {
          if (testsInput) {
            return true;
          } else {
            console.log('You need to provide tests or examples!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Provide your github username. (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please provide your github username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'address',
        message: 'Provide an email address to be contacted at. (Required)',
        validate: addressInput => {
          if (addressInput) {
            return true;
          } else {
            console.log('Please provide your github username!');
            return false;
          }
        }
      },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);
        console.log('Page created! Check out README.md in this directory to see it!');
      });
}

//TODO: Create function to run Prompt
const promptUser = promptInput => {

    return inquirer.prompt(questions)
    .then((data) => {
        writeToFile('./dist/README.md', generateMarkdown(data));
      })
    .catch((err) => {
        if (err) throw new Error(err);
      });
}

// TODO: Create a function to initialize app
function init() {
    promptUser();
}

// Function call to initialize app
init();
