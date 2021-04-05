"use strict";

console.log('app.js is running!'); // JSX - JavaScript XML

var app = {
  title: 'Welcome to the Indecision App!',
  subtitle: 'We will help you make up your mind!',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

var removeAllOptions = function removeAllOptions() {
  app.options = [];
  renderApp();
};

var appRoot = document.getElementById('app');
var numbers = [55, 101, 1000];

var renderApp = function renderApp() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), app.subtitle && /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? 'These are your options' : 'You have no options'), /*#__PURE__*/React.createElement("p", null, app.options.length), /*#__PURE__*/React.createElement("button", {
    onClick: removeAllOptions
  }, "Remove All"), /*#__PURE__*/React.createElement("ol", null, app.options.map(function (option, idx) {
    return /*#__PURE__*/React.createElement("li", {
      key: idx
    }, option);
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "option"
  }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
  ReactDOM.render(template, appRoot);
};

renderApp();
