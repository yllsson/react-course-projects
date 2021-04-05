"use strict";

console.log('app.js is running!'); // JSX - JavaScript XML

var app = {
  title: 'Welcome to the Indecision App!',
  subtitle: 'We will help you make up your mind!',
  options: ['One', 'Two']
};
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), app.subtitle && /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? 'These are your options' : 'You have no options'), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item one"), /*#__PURE__*/React.createElement("li", null, "Item two")));
var count = 0;

var addOne = function addOne() {
  console.log('addOne');
};

var minusOne = function minusOne() {
  console.log('minusOne');
};

var reset = function reset() {
  console.log('reset');
};

var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Count: ", count), /*#__PURE__*/React.createElement("button", {
  onClick: addOne
}, "+1"), /*#__PURE__*/React.createElement("button", {
  onClick: minusOne
}, "-1"), /*#__PURE__*/React.createElement("button", {
  onClick: reset
}, "Reset"));
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
