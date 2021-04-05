const appRoot = document.getElementById('app');

// MY SOLUTION //
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

// COURSE SOLUTION //

let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   renderVisibilityApp();
// };

// const renderVisibilityApp = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle!</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && <p>Hey. These are some details you can now see!</p>}
//     </div>
//   );

//   ReactDOM.render(jsx, appRoot);
// };

renderVisibilityApp();
