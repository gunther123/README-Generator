//Reference to all required packages
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project-name',
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
        name: 'confirm-license',
        message: 'Would you like to add a license?',
        default: true
      },
      {
        type: 'list',
        name: 'license',
        message: 'What type of license would you like to use? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node', 'Markdown', 'Python', 'C#']
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);
  
        console.log('Page created! Check out README.md in this directory to see it!');
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
      })
    .catch((error) => {
        if (error.isTtyError) {
          (console.log("Something went wrong."))
        } else {
          console.log("Something else went wrong.")
        }
      });
}

// Function call to initialize app
init();
