// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdownMethods = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your Github username?',
    name: 'username'
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
  },
  {
    type: 'list',
    message: 'Which license would you like to use for your project?',
    name: 'license',
    choices: [
      'MIT', 
      'Apache',
      'Perl'
    ]
  },
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title'
  },
  {
    type: 'input',
    message: 'Please list a description of your project.',
    name: 'description'
  },
  {
    type: 'input',
    message: 'Please list any installation instructions at this time.',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'Please list any usage information at this time.',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'Please list any contribution guidelines at this time.',
    name: 'contribution'
  },
  {
    type: 'input',
    message: 'Please list any instructions relevant to testing at this time.',
    name: 'instructions'
  }
];

const [username, email, license, title, description, installation, usage, contribution, instructions] = questions

const writeToFile = (fileName, data) =>{
  fs.writeFile(`${fileName}`, markdownMethods.generateMarkdown(data), (err) => {
    err ? console.err(err) : console.log(`Responses saved to ${fileName}`)
  })
}

function init() {
  inquirer.prompt([
    username,
    email,
    license,
    title,
    description,
    installation,
    usage,
    contribution,
    instructions
  ]).then((response) => {
    writeToFile('README.md', response)
  })
}

// Function call to initialize app
init();

// console.log('test: ', markdownMethods)
