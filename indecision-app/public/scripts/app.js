"use strict";

console.log('app.js is running!'); // JSX - JavaScript XML

var app = {
  title: 'Welcome to the Indecision App!',
  subtitle: 'We will help you make up your mind!',
  options: ['One', 'Two']
};
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), app.subtitle && /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? 'These are your options' : 'You have no options'), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item one"), /*#__PURE__*/React.createElement("li", null, "Item two")));
var user = {
  name: 'Ylva Turner',
  age: 30,
  location: 'Edinburgh'
};

function getLocation(location) {
  if (location) {
    return /*#__PURE__*/React.createElement("p", null, "Location: ", location);
  }
}

var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, user.name ? user.name : 'Anonymous'), user.age && user.age >= 18 && /*#__PURE__*/React.createElement("p", null, "Age: ", user.age), getLocation(user.location));
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
