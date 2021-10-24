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
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node', 'Markdown', 'Python', 'C#']
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
        choices: ['Javascript', 'ICS', 'Test'],
        when: ({ confirmLicense }) => confirmLicense
      }
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
        console.log(generateMarkdown(data));
        return generateMarkdown(data);
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
