import { Circle, Triangle, Square } from './shapes.js';

describe('Shape Classes', () => {
  describe('Circle', () => {
    test('should create an SVG circle element with default color', () => {
      const circle = new Circle();
      const svg = circle.render('A', '#fff');
      expect(svg).toContain('<circle');
      expect(svg).toContain('fill="black"');
      expect(svg).toContain('A</text>');
    });

    test('should set the color of the circle', () => {
      const circle = new Circle();
      circle.setColor('blue');
      const svg = circle.render('A', '#fff');
      expect(svg).toContain('fill="blue"');
    });
  });

  describe('Triangle', () => {
    test('should create an SVG polygon element with default color', () => {
      const triangle = new Triangle();
      const svg = triangle.render('B', '#fff');
      expect(svg).toContain('<polygon');
      expect(svg).toContain('fill="black"');
      expect(svg).toContain('B</text>');
    });

    test('should set the color of the triangle', () => {
      const triangle = new Triangle();
      triangle.setColor('red');
      const svg = triangle.render('B', '#fff');
      expect(svg).toContain('fill="red"');
    });
  });

  describe('Square', () => {
    test('should create an SVG rect element with default color', () => {
      const square = new Square();
      const svg = square.render('C', '#fff');
      expect(svg).toContain('<rect');
      expect(svg).toContain('fill="black"');
      expect(svg).toContain('C</text>');
    });

    test('should set the color of the square', () => {
      const square = new Square();
      square.setColor('green');
      const svg = square.render('C', '#fff');
      expect(svg).toContain('fill="green"');
    });
  });
});
