 const { Circle, Triangle, Square } = require('./shapes');

  describe('shape class', () => {
  test('circle method should come back vaild', () => {
    const shape = new Circle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<circle cx="50%" cy="50%" r="100" fill="blue" />');
  });

  test('square method should come back valid', () => {
    const shape = new Square();
    shape.setColor('green');
    expect(shape.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="green" />');
  });

  test('triangle method method should come back valid', () => {
    const shape = new Triangle();
    shape.setColor('red');
    expect(shape.render()).toEqual('<polygon points="150, 50 100, 150 200, 150" fill="red" />');
  });

 
});