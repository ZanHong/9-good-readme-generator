// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

![License](https://img.shields.io/static/v1?label=license&message=${data.license}&color=blue)

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Testing](#testing)
* [Questions](#questions)

## Installation

\`\`\`
${data.installation}
\`\`\`

## Usage

\`\`\`
${data.usage}
\`\`\`

## License

License for this project: ${data.license}

## Contributing

${data.contribution}

## Testing

${data.test}

## Questions

If you have any questions/doubts, feel free to contact me via:
* GitHub: [https://github.com/${data.username}](https://github.com/${data.username})
* Email: [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
