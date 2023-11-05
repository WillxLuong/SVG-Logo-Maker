import inquirer from 'inquirer';
import { writeFile } from 'fs/promises';
import { Circle, Triangle, Square } from './lib/shapes.js';

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'What text do you want on the logo? (up to three characters)',
    validate: (input) => input.length > 0 && input.length <= 3,
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'What color do you want the text to be? (color keyword or hexadecimal)',
    default: 'white',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'What shape do you want for the logo?',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'What color do you want the shape to be? (color keyword or hexadecimal)',
    default: 'black',
  },
];

async function createLogo() {
  const answers = await inquirer.prompt(questions);

  let shape;
  switch (answers.shape) {
    case 'circle':
      shape = new Circle();
      break;
    case 'triangle':
      shape = new Triangle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      throw new Error('Unknown shape type');
  }

  shape.setColor(answers.shapeColor);
  const svgContent = shape.render(answers.text, answers.textColor);

  await writeFile('logo.svg', svgContent);

  console.log('Generated logo.svg');
}

createLogo().catch((error) => {
  console.error('Error creating the logo:', error);
  process.exit(1);
});
