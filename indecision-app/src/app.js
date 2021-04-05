console.log('app.js is running!');

// JSX - JavaScript XML

const app = {
  title: 'Welcome to the Indecision App!',
  subtitle: 'We will help you make up your mind!',
  options: ['One', 'Two'],
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>
      {app.options.length > 0
        ? 'These are your options'
        : 'You have no options'}
    </p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
