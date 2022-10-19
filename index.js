// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdownMethods = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
  'What is your Github username?',
  'What is your email address?',
  'Which license would you like to use for your project?',
  'What is your project title?',
  'Please list any installation instructions at this time.',
  'Please list any usage information at this time.',
  'Please list any contribution guidelines at this time.',
  'Please list any instructions relevant to testing at this time.',
];

const [username, email, license, projectTitle, installation, usage, contribution, instructions] = questions

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

function init() {
  inquirer.prompt([
    {
      type: 'input',
      message: username,
      name: 'username',
    },
    {
      type: 'input',
      message: email,
      name: 'email'
    },
    {
      type: 'list',
      message: license,
      name: 'license',
      choices: [
        'MIT', 
        'Apache',
        'Perl'
      ]
    },
    {
      type: 'input',
      message: projectTitle,
      name: 'title'
    },
    {
      type: 'input',
      message: installation,
      name: 'installation'
    },
    {
      type: 'input',
      message: usage,
      name: 'usage'
    },
    {
      type: 'input',
      message: contribution,
      name: 'contribution'
    },
    {
      type: 'input',
      message: instructions,
      name: 'instructions'
    },
  ]).then((response) => {
    for (let [key, value] of Object.entries(response)) {
      switch (key) {
        case 'title':
          fs.writeFile(`README.md`, markdownMethods.generateMarkdown(key, value), (err) => {
            err ? console.err(err) : console.log(`Responses saved to README.md`)
          })
          break;
        
        
      }
    }
  })
}

// Function call to initialize app
init();

// console.log('test: ', markdownMethods)
