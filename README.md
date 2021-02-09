# README Generator

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

## Description
this application is designed to create a readme file based on user inputs in the command prompt. The questions are asked using the npm Inquirer. There are questions that will only be asked if the user wants to include that information, this also applies as to what will display in the table of contents. The users Github and email will be linked in a section marked Questions. The live link is determined that the name of the Github repository is the same as the title entered. If a license is slected, the corresponding badge will appear at the top of the readme file.

## Table of Contents

* [User Story](#user-story)
* [Installation](#installation)
* [Usage](#usage)
* [Features](#features)
* [Questions](#Questions)
* [License](#license)

## User Story
```md
AS A Web Developer
I WANT to easily create readme files
SO THAT I can spend less time creating readme files and more time coding.
```

## Installation
- first we need to install [node.js](https://nodejs.org/en/)
- then we install [inquirer](https://www.npmjs.com/package/inquirer) by typing "npm install" into the command terminal.

## Usage
- after installing node.js and inquirer we can initialize the program by entering "node index.js" into the terminal.
- The user will be asked prompts pertaining to the information they want to add to the readme.

![example gif](./assets/images/readme_generator_example.gif)

## Features
the project utilizes:
- JavaScript
- Node.js 
- npm Inquirer

## Questions
Github: [ColinMudie](https://github.com/ColinMudie/)  
Email: [csmudie1@gmail.com](csmudie1@gmail.com)

## License
MIT License
Copyright (c) [2021] [Colin Mudie]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
