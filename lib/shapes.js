class Shape {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }
    setColor(color) {
      this.shapeColor = color;
    }
  }
    
    class Circle extends Shape {
      generate() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}" />`;
      }
    }

     
    class Square extends Shape {
        generate() {
          return `<rect x="100" y="50" width="100" height="100" fill="${this.shapeColor}" />`;
        }
    }
     
    
    class Triangle extends Shape {
      generate() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapeColor}" />`;
      }
    }
   
    export default {
      Circle,
      Square,
      Square,
    };
    