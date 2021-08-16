const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);

  expect(result).toBe(7);
});

test('should generate greeting with the name passed into the function', () => {
  const greeting = generateGreeting('Ylva');

  expect(greeting).toBe(`Hello Ylva!`);
});

test('should generate greeting for no name', () => {
  const greeting = generateGreeting();

  expect(greeting).toBe('Hello Anonymous!');
});
