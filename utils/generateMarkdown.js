const renderLicenseBadge = (license) => {
  switch(license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'Perl':
      return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
    case 'None':
      return;
  }
}

const renderLicenseSection = (license, title) =>{
  switch(license) {
    case 'MIT':
      return `${title} is available under the [MIT License](https://opensource.org/licenses/MIT).`
    case 'Apache':
      return `${title} is available under the [Apache License](https://opensource.org/licenses/Apache-2.0).`
    case 'Perl':
      return `${title} is available under the [Perl License](https://opensource.org/licenses/Artistic-2.0).`
    case 'None':
      return;
  }
}

// Nullish coalescing operator is used on line 33 to evaluate if a badge should
// be created or not
const generateMarkdown = ({ username, email, license, title, description, installation, usage, contributions, testing }) => {

  return `# ${title}

${renderLicenseBadge(license) ?? ""}
## Description
***
${description}

## Table of Contents
***
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Testing](#testing)
- [License](#license)

## Installation
***
\`\`\`
${installation.trim()}
\`\`\`

## Usage
***
${usage}

## Contributions
***
${contributions}

## Testing
***
${testing}

## License
***
${renderLicenseSection(license, title)}

## Questions
***
Questions, comments, concerns? Contact me on [Github](https://github.com/${username}) or send me an email at ${email}.
`
}

module.exports = {
  renderLicenseBadge,
  renderLicenseSection,
  generateMarkdown
}
