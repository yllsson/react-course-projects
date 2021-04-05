"use strict";

var appRoot = document.getElementById('app');
var buttonMessage = 'Show details';
var message = '';

var onShowDetails = function onShowDetails() {
  if (buttonMessage === 'Show details') {
    buttonMessage = 'Hide details';
    message = 'Look at all the details!';
  } else {
    buttonMessage = 'Show details';
    message = '';
  }

  renderVisibilityApp();
};

var renderVisibilityApp = function renderVisibilityApp() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Visibility Toggle!"), /*#__PURE__*/React.createElement("button", {
    onClick: onShowDetails
  }, buttonMessage), message && /*#__PURE__*/React.createElement("p", null, message));
  ReactDOM.render(template, appRoot);
};

renderVisibilityApp();
