const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const markDownGenerator = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "A brief description of your project",
        name: "description"
    },
    {
        type: "input",
        message: "How to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "How to use your project?",
        name: "usage"
    },
    {
        type: "list",
        message: "What is the license used for your project?",
        name: "license",
        choices: [
            "MIT",
            "GNU",
            "Unlicensed"
        ]
    },
    {
        type: "input",
        message: "How to contribute to your project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "How to test your code?",
        name: "test"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    writeFileAsync(fileName, data)
        .then(() => console.log("Success! Please navigate to ./Develop folder and look for sampleREADME.md"));
}

// function to initialize program
async function init() {
    try {
        const data = await inquirer.prompt(questions)
        const readme = markDownGenerator(data);

        await writeToFile("sampleREADME.md", readme);
    } catch (err) {
        console.log(err);
    }
}
// function call to initialize program
init();
