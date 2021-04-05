const appRoot = document.getElementById('app');

let buttonMessage = 'Show details';
let message = '';

const onShowDetails = () => {
  if (buttonMessage === 'Show details') {
    buttonMessage = 'Hide details';
    message = 'Look at all the details!';
  } else {
    buttonMessage = 'Show details';
    message = '';
  }

  renderVisibilityApp();
};

const renderVisibilityApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle!</h1>
      <button onClick={onShowDetails}>{buttonMessage}</button>
      {message && <p>{message}</p>}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderVisibilityApp();
