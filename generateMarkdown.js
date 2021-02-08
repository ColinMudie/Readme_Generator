// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if(data.licenseType === 'none' | data.licenseType === ""){
  return '';
} 
else {
  return `${renderLicenseLink(data)}`
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  switch (data.licenseType) {
    case 'MIT License':
      return `![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)`

    case 'GNU GPLv3':
      return `![License: GNU GPLv3](https://img.shields.io/badge/License-GNU_GPLv3-green.svg)`

    case 'Apache':
      return `![License: Apache](https://img.shields.io/badge/License-Apache-green.svg)`

    default:
      return '';
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  switch (data.licenseType) {
    case 'MIT License':
      return `## License
MIT License
Copyright (c) [${data.licenseYear}] [${data.username}]

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
SOFTWARE.`
//////////////////////////////////////
    case 'GNU GPLv3':
      return `## License
Copyright (C) <${data.licenseYear}>  <${data.username}>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
`
////////////////////////////////////////
    case 'Apache':
      return `## License
Copyright [${data.licenseYear}] [${data.username}]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`
////////////////////////////////////////
    case 'None':
      return ''
    default:
      return '';
  }
}

function makeInstallation(data){
  if ((data.checkbox).includes('Installation')){
  return `## Installation
${data.installation}`
  }
  else {
    return ''
  }
}

function createUserStory(data){
  if((data.checkbox).includes('User Story')){
    return `## User Story
\`\`\`md
AS A ${data.userStoryAsA}
I WANT ${data.userStoryIWant}
SO THAT ${data.userStorySoThat}
\`\`\``
  }
}
function createUsage(data){
  if((data.checkbox).includes('Usage')){
    return `## Usage
${data.usage}`
  }
}


function createCredits(data){
  if((data.checkbox).includes('Credits')){
    return `## Credits
${data.credits}`
  }
}

function createTableContents(data){
  if((data.checkbox).includes("Table of Contents")){
    let table = `## Table of Contents
`
      if ((data.checkbox).includes('User Story')) {
        table = table.concat(`
* [User Story](#user-story)`)
      }
      if ((data.checkbox).includes('Installation')) {
        table = table.concat(`
* [Installation](#installation)`)
      }
      if ((data.checkbox).includes('Usage')) {
        table = table.concat(`
* [Usage](#usage)`)
      }
      if ((data.checkbox).includes('Features')) {
        table = table.concat(`
* [Features](#features)`)
      }
      if ((data.checkbox).includes('Tests')) {
        table = table.concat(`
* [Tests](#tests)`)
      }
      table.concat(`
* [Questions](#questions)`)
      if ((data.checkbox).includes('Credits')) {
        table = table.concat(`
* [Credits](#credits)`)
      }
      if ((data.checkbox).includes('License')) {
        table = table.concat(`
* [License](#license)`)
      }
      table.concat(`
---`)
      return table
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data)}

## Description
${data.description}

${createTableContents(data)}


${createUserStory(data)}

${makeInstallation(data)}

${createUsage(data)}

${createFeatures(data)}

## Questions
Github: [${data.github}](https://github.com/${data.github}/)  
Email: [${data.email}](${data.email})

${createCredits(data)}

${renderLicenseSection(data)}
`;
}

module.exports = generateMarkdown;
