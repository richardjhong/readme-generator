const inquirer = require('inquirer');
const fs = require('fs');
const markdownMethods = require('../../utils/generateMarkdown')
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
      'Perl',
      'None'
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
    // done with editor in the event of multiple cli instruction lines being 
    // needed
    type: 'editor',
    message: 'Please list any installation instructions at this time.',
    name: 'installation',
    waitUserInput: false,
  },
  {
    type: 'input',
    message: 'Please list any usage information at this time.',
    name: 'usage',
    default() {
      return 'No usage information available.';
    },
  },
  {
    type: 'input',
    message: 'Please list any contribution guidelines at this time.',
    name: 'contributions',
    default() {
      return 'No contribution guidelines available.';
    },
  },
  {
    type: 'input',
    message: 'Please list any instructions relevant to testing at this time.',
    name: 'testing',
    default() {
      return 'No test instructions available.';
    },
  }
];
// destructuring each question to be used for shorter names within prompt 
// method of inquirer in init function below
const [username, email, license, title, description, installation, usage, contributions, testing] = questions

// Since README files are typically saved at root level, the relative path is 
// added in addition to the string literal for fileName
const writeToFile = (fileName, data) =>{
  fs.writeFile(`../../${fileName}`, markdownMethods.generateMarkdown(data), (err) => {
    err ? console.err(err) : console.log(`Responses saved to ${fileName}`)
  })
}

// Sample.md is used here to not overwrite the respository README. While this
// could be circumvented by creating a README in a different file path, writing
// an entirely different markdown file at the same level as the README made
// more sense to me.
const init = () => {
  inquirer.prompt([
    username,
    email,
    license,
    title,
    description,
    installation,
    usage,
    contributions,
    testing
  ]).then((response) => {
    writeToFile('Sample.md', response)
  })
}

init();

