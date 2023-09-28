const fs = require('fs');
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require('./library/shapes');

function writeSVGFile(filename, content) {
    writeFile(filename, content, (error) => {
      if (error) {
        console.error(err);
      } else {
        console.log(`has been generated ${filename}`);
      }
    });
  }

  function init() {
    prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter up to three characters for the logo:',
          validate: (value) => {
            if (value.length <= 3) {
              return true;
            }
            return 'Please provide up to three characters.';
          },
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter the text color (hexadecimal or keyword):',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Choose a shape for your desired logo:',
          choices: ['circle', 'square', 'triangle'],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter the shape`s color (hexadecimal or keyword):',
        },
        ])


      .then((answers) => {
        let shape;
        switch (answers.shape) {
          case 'circle':
            shape = new Circle();
            break;
          case 'square':
            shape = new square();
            break;
          case 'triangle':
            shape = new Triangle();
            break;
          default:
            console.log('shape selected is invalid.');
            return;
        }
  
        shape.setColor(answers.shapeColor);
  
        const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shape.generate()}
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
       </svg>`;
  


     writeSVGFile('logo.svg', svgContent);
      })
      .catch((error) => {
        console.error(error);
      });
       }

     init();
