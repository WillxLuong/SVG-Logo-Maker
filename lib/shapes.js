export class Shape {
  constructor() {
    this.color = 'black';
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    throw new Error('render() must be implemented by subclasses');
  }
}

export class Circle extends Shape {
  render(text, textColor) {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="${this.color}" />
      <text x="150" y="105" font-family="Verdana" font-size="35" fill="${textColor}" text-anchor="middle">${text}</text>
    </svg>`;
  }
}

export class Triangle extends Shape {
  render(text, textColor) {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,20 250,180 50,180" fill="${this.color}" />
      <text x="150" y="105" font-family="Verdana" font-size="35" fill="${textColor}" text-anchor="middle">${text}</text>
    </svg>`;
  }
}

export class Square extends Shape {
  render(text, textColor) {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
      <text x="150" y="105" font-family="Verdana" font-size="35" fill="${textColor}" text-anchor="middle">${text}</text>
    </svg>`;
  }
}
