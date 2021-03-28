console.log('app.js is running!');

// JSX - JavaScript XML

var app = {
  title: 'Welcome to the Indecision App!',
  subtitle: 'We will help you make up your mind!'
};
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: 'Ylva Turner',
  age: 30,
  location: 'Edinburgh'
};

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
